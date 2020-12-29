FROM node:10-alpine

RUN apk add --no-cache openssl

# https://github.com/jwilder/dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir -p /var/www/node_modules && chown -R node:node /var/www

USER node

WORKDIR /var/www

COPY package*.json ./

COPY --chown=node:node . .

EXPOSE 3000
