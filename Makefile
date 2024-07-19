all: run

run: build
	@docker-compose up -d

build:
	@docker-compose build

down:
	@docker-compose down -v
