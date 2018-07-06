FROM node:9.9.0

RUN mkdir -p /var/www/projects/uptick

RUN apt-add-repository -y ppa:git-core/ppa
RUN apt-get update

RUN apt-get install -y git man
WORKDIR /var/www/projects/uptick
RUN git clone https://github.com/epenedos/Uptick-APP


CMD [ "npm", "start" ]
