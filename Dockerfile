FROM node:18.12.1-alpine3.16

ENV PORT 8080
ENV HOST 0.0.0.0
COPY package*.json ./

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli
COPY . .
EXPOSE 8080

USER node

WORKDIR /home/node/app
