FROM clojure:tools-deps-trixie AS builder
WORKDIR /app
COPY . .
RUN clj -T:build uber
WORKDIR /app
CMD ["java", "-jar", "/app/target/drawio_parser.jar"]
