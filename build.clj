(ns build
  (:require [clojure.tools.build.api :as b]))

(def lib 'space.veschin/drawio-parser)
(def version "0.1.0")
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def uber-file (format "target/%s-%s-standalone.jar" (name lib) version))

(defn clean [_]
  (println "Cleaning target directory...")
  (b/delete {:path "target"}))

(defn uber [_]
  (println "Cleaning...")
  (clean nil)
  (println "Copying sources...")
  (b/copy-dir {:src-dirs ["src" "resources"]
               :target-dir class-dir})
  (println "Compiling Clojure code...")
  (b/compile-clj {:basis basis
                  :src-dirs ["src"]
                  :class-dir class-dir})
  (println "Building uberjar...")
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           :basis basis
           :main 'drawio-parser.web})
  (println "Uberjar built successfully:" uber-file))
