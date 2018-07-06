FROM node

RUN mkdir -p /var/www/projects/Uptick-APP

WORKDIR /var/www/projects/Uptick-APP
RUN git clone https://github.com/epenedos/Uptick-APP


CMD [ "npm", "start" ]
