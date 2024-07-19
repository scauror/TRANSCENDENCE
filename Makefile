COMPOSE_FILE	:=	docker-compose.dev.yml

all: run

run: build
	@docker-compose -f $(COMPOSE_FILE) up -d

build:
	@docker-compose -f $(COMPOSE_FILE) build

down:
	@docker-compose -f $(COMPOSE_FILE) down -v
