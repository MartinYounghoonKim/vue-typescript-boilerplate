# VueJS boilerplate with typescript

## Deploy
```bash
$ chmod 777 ./publish.sh
$ ./publish.sh
```

## Requirement
* node@6.14.0
* pm2
* Docker compose

### Features
* ---------- **Essentials** ----------
* [x] Setting development environment with docker container 
* [x] Hot module replacement in express server
* [x] Hot module replacement in docker container
* [ ] Apply sample vuex module
* [ ] Apply middleware in vue router
* [ ] Deploy script for jenkins

## Folder directory

```
┌── index.html/
│
├── build/    
│   ├── build.js
│   ├── check-versions.js
│   ├── dev.server.config.js
│   ├── utils.js
│   ├── vue-loader.config.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
│
├── bin/
│   └── server.js
│
├── config/
│
├── logs/    
│   ├── error.log
│   ├── out.log
│   └── forever.log
│
├── src/
│
├── static/
│
└── test/   
```

## Build Docker image and container
```bash
# build docker image
$ docker-compose build --no-cache

# container up with docker image
$ docker-compose up
```

## Build Setup
``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report

# run unit tests
$ npm run unit

# run e2e tests
$ npm run e2e

# run all tests
$ npm test
```
