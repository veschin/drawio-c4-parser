.PHONY: run test

run:
	clj -M -m drawio-parser.core

test:
	clj -M -m drawio-parser.test
