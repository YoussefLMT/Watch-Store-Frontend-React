FROM node:17-alpine

WORKDIR /watch_store_frontend

COPY package.json .

RUN npm install

COPY . /watch_store_frontend

EXPOSE 3000

CMD ["npm", "start"]