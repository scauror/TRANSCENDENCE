FROM	nginx:1.25

RUN		rm /etc/nginx/conf.d/default.conf

COPY	nginx.conf /etc/nginx/conf.d
WORKDIR /etc/nginx/ssl
COPY	server.crt .
COPY	server.key .
COPY	dhparam.pem .
