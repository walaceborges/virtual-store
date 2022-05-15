FROM node:14-alpine

WORKDIR /usr/src/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

RUN ["echo", "RODOU"]

CMD [ "npm", "start" ]