FROM node:9.9.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app



CMD [ "npm", "start" ]
