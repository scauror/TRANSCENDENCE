COMPOSE_FILE_DEV	:=	docker-compose.dev.yml
COMPOSE_FILE_PROD	:=	docker-compose.prod.yml

all: run

run: build
	@docker-compose -f $(COMPOSE_FILE_DEV) up -d

build:
	@docker-compose -f $(COMPOSE_FILE_DEV) build

down:
	@docker-compose -f $(COMPOSE_FILE_DEV) down -v

re: down run

run-prod: build-prod
	@docker-compose -f $(COMPOSE_FILE_PROD) up -d

build-prod:
	@docker-compose -f $(COMPOSE_FILE_PROD) build

down-prod:
	@docker-compose -f $(COMPOSE_FILE_PROD) down -v

