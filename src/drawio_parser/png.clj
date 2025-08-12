(ns drawio-parser.png
  (:require [clojure.java.io :as io])
  (:import [java.io ByteArrayInputStream DataInputStream]
           [java.util.zip Inflater]
           [java.util Base64]))

(defn- read-be-int32
  "Read big-endian 32-bit integer from DataInputStream"
  [^DataInputStream dis]
  (.readInt dis))

(defn- read-chunk
  "Read PNG chunk: length + type + data + crc"
  [^DataInputStream dis]
  (try
    (let [length (read-be-int32 dis)
          type-bytes (byte-array 4)
          _ (.readFully dis type-bytes)
          type (String. type-bytes "ASCII")
          data (byte-array length)
          _ (.readFully dis data)
          crc (read-be-int32 dis)]
      {:length length
       :type type
       :data data
       :crc crc})
    (catch Exception _
      nil)))

(defn- decompress-deflate
  "Decompress DEFLATE data with Draw.io specific handling"
  [compressed-data]
  (try
    ;; Draw.io uses headerless deflate compression
    (let [inflater (doto (Inflater. true) ; true = nowrap (no header)
                     (.setInput compressed-data))
          buffer (byte-array 8192)
          result (java.io.ByteArrayOutputStream.)]
      (while (not (.finished inflater))
        (let [count (.inflate inflater buffer)]
          (when (> count 0)
            (.write result buffer 0 count))))
      (.close inflater)
      (.toByteArray result))
    (catch Exception e
      (throw (ex-info "Failed to decompress DEFLATE data" {:error (.getMessage e)})))))

(defn- parse-ztxt-chunk
  "Parse zTXt chunk to extract keyword and text"
  [data]
  (try
    (let [null-pos (loop [i 0]
                     (if (or (>= i (count data)) (zero? (aget data i)))
                       i
                       (recur (inc i))))
          keyword (String. (byte-array (take null-pos data)) "ISO-8859-1")
          compression-method (aget data (inc null-pos))
          compressed-data (byte-array (drop (+ null-pos 2) data))]
      (when (zero? compression-method) ; 0 = deflate
        (let [decompressed (decompress-deflate compressed-data)
              text (String. decompressed "ISO-8859-1")]
          {:keyword keyword
           :text text})))
    (catch Exception e
      (throw (ex-info "Failed to parse zTXt chunk" 
                      {:error (.getMessage e)} e)))))

(defn extract-drawio-xml
  "Extract Draw.io XML from PNG zTXt chunks"
  [png-bytes]
  (try
    (let [bis (ByteArrayInputStream. png-bytes)
          dis (DataInputStream. bis)]
      ;; Skip PNG signature (8 bytes)
      (.skip dis 8)
      
      ;; Find zTXt chunks with 'mxGraphModel' keyword
      (loop []
        (when-let [chunk (read-chunk dis)]
          (cond
            (= "zTXt" (:type chunk))
            (let [parsed (try
                          (parse-ztxt-chunk (:data chunk))
                          (catch Exception _ nil))]
              (if (and parsed (= "mxGraphModel" (:keyword parsed)))
                ;; Found Draw.io data - decode from base64 and extract XML
                (let [base64-xml (:text parsed)
                      xml-bytes (.decode (Base64/getDecoder) base64-xml)
                      xml-str (String. xml-bytes "UTF-8")]
                  xml-str)
                (recur))) ; Continue looking for mxGraphModel chunk or skip malformed
            
            (= "IEND" (:type chunk))
            nil ; End of file, no Draw.io data found
            
            :else
            (recur)))))
    (catch Exception e
      (throw (ex-info "Failed to extract Draw.io XML from PNG" 
                      {:error (.getMessage e)} e)))))

(defn validate-drawio-png
  "Check if PNG contains valid Draw.io metadata"
  [png-bytes]
  (try
    (boolean (extract-drawio-xml png-bytes))
    (catch Exception _
      false)))

(comment
  ;; Example usage:
  (let [png-file (io/file "resources/diagram-with-xml.png")
        png-bytes (with-open [is (io/input-stream png-file)]
                    (.readAllBytes is))]
    (if (validate-drawio-png png-bytes)
      (let [xml (extract-drawio-xml png-bytes)]
        (println "Extracted XML:" xml))
      (println "No Draw.io data found"))))