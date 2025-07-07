# Default port, can be overridden e.g., `make DP_PORT=9090 docker-run`
DP_PORT ?= 8080
CONTAINER_NAME = drawio-parser-app

.PHONY: run test uberjar docker-build docker-run docker-stop

run:
	clj -M -m drawio-parser.web

test:
	clj -M:test

uberjar:
	clj -T:build uber

docker-build: uberjar
	docker build -t drawio-parser .

# Runs the container, tests endpoints, and then stops the container.
docker-run: docker-build
	@echo "--- Starting container [$(CONTAINER_NAME)] for testing ---"
	@docker run -d --name $(CONTAINER_NAME) --env-file .env -p $(DP_PORT):$(DP_PORT) drawio-parser
	@echo "Waiting for server to initialize..."
	@sleep 5
	@echo "--- Testing Endpoints via cURL ---"
	@curl --fail -s -o /dev/null "http://localhost:$(DP_PORT)/api/v1/parse/export" -X POST \
		--header "Content-Type: application/xml" \
		--data-binary "@resources/drawio.drawio.xml" \
		&& echo "✅ /api/v1/parse/export OK" || (echo "❌ /api/v1/parse/export FAILED"; make docker-stop; exit 1)
	@curl --fail -s -o /dev/null "http://localhost:$(DP_PORT)/api/v1/parse/paste" -X POST \
		--header "Content-Type: text/plain" \
		--data-binary "@resources/drawio-paste.xml" \
		&& echo "✅ /api/v1/parse/paste OK" || (echo "❌ /api/v1/parse/paste FAILED"; make docker-stop; exit 1)
	@echo "--- Tests passed, stopping container ---"
	@make docker-stop

# Utility target to stop the container if it's left running
docker-stop:
	@echo "Stopping and removing container [$(CONTAINER_NAME)]..."
	@docker stop $(CONTAINER_NAME) >/dev/null 2>&1 && docker rm $(CONTAINER_NAME) >/dev/null 2>&1 || echo "Container not found or already stopped."