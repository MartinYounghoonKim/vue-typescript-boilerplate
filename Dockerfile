FROM node:boron

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ADD package.json /usr/src/app/package.json
RUN npm install forever nodemon -g

RUN npm install
EXPOSE 3000

CMD npm run start:local
