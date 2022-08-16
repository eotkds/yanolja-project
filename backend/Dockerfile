FROM node:16.14.2

WORKDIR /MYPROJECT/
COPY ./package.json /MYPROJECT/
COPY ./yarn.lock /MYPROJECT/
RUN yarn install

COPY . /MYPROJECT/
CMD yarn start:dev