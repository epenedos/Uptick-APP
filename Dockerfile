FROM node:9.9.0

RUN mkdir -p /var/www/projects/uptick

WORKDIR /var/www/projects/uptick
RUN git clone https://github.com/epenedos/Uptick-APP


CMD [ "npm", "start" ]
