# Default port, can be overridden e.g., `make DP_PORT=9090 docker-run`
DP_PORT ?= 8080
CONTAINER_NAME = drawio-parser-app

.PHONY: run test uberjar docker-build docker-run docker-stop compose-up compose-down compose-test \
         frontend-deps frontend-dev frontend-build frontend-css clean-frontend

run:
	clj -M -m drawio-parser.web

test:
	clj -M:test

uberjar:
	clj -T:build uber

docker-build:
	docker build -t drawio-parser .

# Runs the container, tests endpoints with httpie, and then stops the container.
# Requires httpie to be installed (https://httpie.io/docs/cli/installation)
docker-run:
	@echo "--- Starting container [$(CONTAINER_NAME)] for testing ---"
	@docker run -d --rm --name $(CONTAINER_NAME) --env-file .env -p $(DP_PORT):$(DP_PORT) drawio-parser
	@echo "Waiting for server to initialize..."
	@sleep 5

	@echo "\n--- Testing Endpoint: /api/v1/parse/export ---"
	@echo "Sending file: resources/drawio.drawio.xml"
	@http --check-status --timeout=10 POST http://localhost:$(DP_PORT)/api/v1/parse/export < resources/drawio.drawio.xml \
		&& echo "\n/api/v1/parse/export OK" || (echo "\n/api/v1/parse/export FAILED"; make docker-stop; exit 1)

	@echo "\n--- Testing Endpoint: /api/v1/parse/paste ---"
	@echo "Sending file: resources/drawio-paste.xml"
	@http --check-status --timeout=10 POST http://localhost:$(DP_PORT)/api/v1/parse/paste 'Content-Type:text/plain' < resources/drawio-paste.xml \
		&& echo "\n/api/v1/parse/paste OK" || (echo "\n/api/v1/parse/paste FAILED"; make docker-stop; exit 1)

	@echo "\n--- All tests passed, stopping container ---"
	@make docker-stop

# Utility target to stop the container if it's left running
docker-stop:
	@echo "Stopping and removing container [$(CONTAINER_NAME)]..."
	@docker stop $(CONTAINER_NAME) >/dev/null 2>&1 && docker rm $(CONTAINER_NAME) >/dev/null 2>&1 || echo "Container not found or already stopped."

# Docker Compose targets
compose-up:
	@echo "Starting services with Docker Compose..."
	@docker-compose up -d
	@echo "Services started. Main app: http://localhost:$(DP_PORT), Renderer: http://localhost:5000"

compose-down:
	@echo "Stopping Docker Compose services..."
	@docker-compose down

compose-test:
	@echo "--- Starting services for testing ---"
	@docker-compose up -d
	@echo "Waiting for services to initialize..."
	@sleep 10

	@echo "\n--- Testing Health Endpoint ---"
	@http --check-status --timeout=10 GET http://localhost:$(DP_PORT)/api/v1/health \
		&& echo "\nHealth check OK" || (echo "\nHealth check FAILED"; make compose-down; exit 1)

	@echo "\n--- Testing Endpoint: /api/v1/parse/export ---"
	@echo "Sending file: resources/drawio.drawio.xml"
	@http --check-status --timeout=10 POST http://localhost:$(DP_PORT)/api/v1/parse/export < resources/drawio.drawio.xml \
		&& echo "\n/api/v1/parse/export OK" || (echo "\n/api/v1/parse/export FAILED"; make compose-down; exit 1)

	@echo "\n--- Testing Endpoint: /api/v1/parse/paste ---"
	@echo "Sending file: resources/drawio-paste.xml"
	@http --check-status --timeout=10 POST http://localhost:$(DP_PORT)/api/v1/parse/paste 'Content-Type:text/plain' < resources/drawio-paste.xml \
		&& echo "\n/api/v1/parse/paste OK" || (echo "\n/api/v1/parse/paste FAILED"; make compose-down; exit 1)

	@echo "\n--- All tests passed, stopping services ---"
	@make compose-down

# Frontend development targets
frontend-deps:
	@echo "Installing frontend dependencies..."
	npm install

frontend-dev:
	@echo "Starting frontend development with hot reload..."
	npm run dev

frontend-build:
	@echo "Building frontend for production..."
	npm run build

frontend-css:
	@echo "Building CSS only..."
	npm run css-build

clean-frontend:
	@echo "Cleaning frontend build artifacts..."
	rm -rf node_modules resources/public/css/output.css resources/public/js/main.js
