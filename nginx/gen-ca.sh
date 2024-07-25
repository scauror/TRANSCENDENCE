#! /usr/bin/sh
openssl req -x509 -days 365 -newkey rsa:4096 -keyout root-ca.key -sha512 -out root-ca.crt
openssl req -nodes   \
  -newkey rsa:4096   \
  -keyout server.key \
  -out server.csr
openssl x509 -req     \
  -sha512             \
  -CA root-ca.crt     \
  -CAkey root-ca.key  \
  -in server.csr      \
  -out server.crt     \
  -days 365           \
  -CAcreateserial     \
  -extfile server.ext

#openssl dhparam -out dhparam.pem 4096
