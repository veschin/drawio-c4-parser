# Stage 1: Build the application
FROM clojure:tools-deps-trixie AS builder

WORKDIR /app

# First, copy only the dependency file to leverage Docker layer caching
COPY deps.edn .
# Download dependencies
RUN clj -P

# Copy the rest of the application source code
COPY . .

# Build the uberjar
RUN clj -T:build uber

# Stage 2: Create the final, minimal image
FROM eclipse-temurin:21-jre-alpine

# Set the working directory
WORKDIR /app

# Copy the uberjar from the builder stage
COPY --from=builder /app/target/drawio_parser.jar .

# Command to run the application
CMD ["java", "-jar", "drawio_parser.jar"]
