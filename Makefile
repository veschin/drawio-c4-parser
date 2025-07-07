.PHONY: run test uberjar docker-build docker-run

run:
	clj -M -m drawio-parser.web

test:
	clj -M:test

uberjar:
	clj -T:build uber

docker-build: uberjar
	docker build -t drawio-parser .

docker-run:
	docker run --rm -p 8080:8080 drawio-parser
