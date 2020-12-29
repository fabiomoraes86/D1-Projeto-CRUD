FROM node:10-alpine

RUN mkdir -p /var/www/node_modules && chown -R node:node /var/www

USER node

WORKDIR /var/www

COPY package*.json ./

COPY --chown=node:node . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]