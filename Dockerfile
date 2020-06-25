FROM node:12-alpine


ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install  --frozen-lockfile
COPY . .

CMD [ "yarn", "start" ]