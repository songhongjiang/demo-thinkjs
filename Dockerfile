FROM mhart/alpine-node:8.9.4

WORKDIR /demo-thinkjs
COPY package.json /demo-thinkjs/package.json
RUN npm i --production --registry=https://registry.npm.taobao.org

COPY src /demo-thinkjs/src
COPY view /demo-thinkjs/view
COPY www /demo-thinkjs/www
COPY production.js /demo-thinkjs/production.js

ENV DOCKER=true
EXPOSE 8360
CMD [ "node", "/demo-thinkjs/production.js" ]