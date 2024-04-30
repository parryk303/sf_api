FROM node:20.10.0-alpine3.18

WORKDIR /app
COPY . .
EXPOSE $PORT
CMD npm i; npm run build; npm start