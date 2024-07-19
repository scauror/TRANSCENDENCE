all: run

run: build
	@sudo docker-compose up -d

build:
	@sudo docker-compose build

down:
	@sudo docker-compose down -v
