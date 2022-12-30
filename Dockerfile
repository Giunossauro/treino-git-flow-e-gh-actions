FROM node:lts-alpine3.16

WORKDIR /home/node/app

COPY package.json package*.json ./

ENV PORT 8080
ENV HOST 0.0.0.0

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

USER node

COPY . .
EXPOSE 8080

ENTRYPOINT npm install && npm run build && npm run start:dev
