FROM mhart/alpine-node:8.9.4

WORKDIR /demothinkjs
COPY package.json /demothinkjs/package.json
RUN npm i --production --registry=https://registry.npm.taobao.org

COPY src /demothinkjs/src
COPY view /demothinkjs/view
COPY www /demothinkjs/www
COPY production.js /demothinkjs/production.js

ENV DOCKER=true
EXPOSE 8360
CMD [ "node", "/demothinkjs/production.js" ]