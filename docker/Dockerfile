FROM node:8.12.0

RUN npm install -g --no-progress yarn@1.9.4

ENV APP_HOME /gateway
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY . $APP_HOME

RUN yarn install
RUN yarn webpack-dev

EXPOSE 3000