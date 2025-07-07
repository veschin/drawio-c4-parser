# --- Stage 1: Builder ---
FROM clojure:tools-deps-alpine as builder

WORKDIR /app

# Cache dependencies
COPY deps.edn .
RUN clj -P

# Copy the rest of the project
COPY . .

# Build the uberjar
RUN clj -X:uberjar

# --- Stage 2: Runner ---
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# Copy the built jar from the builder stage
COPY --from=builder /app/target/drawio-parser-0.1.0-standalone.jar .

# Expose the port the server will run on
EXPOSE 8080

# Set the command to run the application
CMD ["java", "-jar", "drawio-parser-0.1.0-standalone.jar"]
