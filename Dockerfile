# Stage 1: Build frontend (CSS + ClojureScript)
FROM node:18 AS node-builder

WORKDIR /app

# Install Java for shadow-cljs (smaller Node image with Java)
RUN apt-get update && apt-get install -y default-jre && apt-get clean

# Copy Node.js dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy build files
COPY tailwind.config.js postcss.config.js shadow-cljs.edn ./
COPY resources/ resources/
COPY src/ src/

# Build CSS and ClojureScript
RUN npm run build

# Stage 2: Build Clojure application
FROM clojure:tools-deps-trixie AS clj-builder

WORKDIR /app

# Copy Clojure dependencies
COPY deps.edn .
RUN clj -P

# Copy source code
COPY . .

# Copy built frontend assets from node-builder
COPY --from=node-builder /app/resources/public/ resources/public/

# Build the uberjar
RUN clj -T:build uber

# Stage 3: Create the final, minimal image
FROM eclipse-temurin:21-jre-alpine

# Set the working directory
WORKDIR /app

# Copy the uberjar from the clj-builder stage
COPY --from=clj-builder /app/target/drawio_parser.jar .

# Command to run the application
CMD ["java", "-jar", "drawio_parser.jar"]
