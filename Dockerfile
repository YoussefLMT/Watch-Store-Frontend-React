FROM node:17-alpine

WORKDIR /watch_store_frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]