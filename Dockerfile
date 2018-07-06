FROM node

RUN mkdir -p /var/www/projects

WORKDIR /var/www/projects
RUN git clone https://github.com/epenedos/Uptick-APP
WORKDIR /var/www/projects/Uptick-APP

CMD [ "npm", "start" ]
