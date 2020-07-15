<h1 align="center">Welcome to covid-api 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-2.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/darklight147/covid-api/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  
  <img alt="License: MIT" src="https://travis-ci.org/darklight147/covid-api.svg?branch=master" />
  </a>
</p>

> Simple crawler and REST Api that tracks corona cases in desired country each time someone makes a GET request

### ✨ [Demo](https://covid.game-linter.com)

## Install

```sh
yarn install --frozen-lockfile
```

## Usage

add a PORT and COUNTRY to the .example.env file and:
```sh
yarn start
```

## Run tests

```sh
yarn start
```

## Author

👤 **Mohamed Belkamel**

* Github: [@darklight147](https://github.com/darklight147/)

## DOCKERIZING

```sh
sudo docker-compose -f docker-compose.prd.yaml up -d --scale api=2
```

This command creates a docker container and scales the api to two instances runs  by default on PORTS 5054 and 5055, you can load-balance them with NGINX

## Show your support

Give a ⭐️ if this project helped you!

***
_Made with ❤️ by Mohamed Belkamel_
