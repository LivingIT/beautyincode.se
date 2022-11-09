FROM ruby:2.7.2-alpine3.11

RUN apk add --no-cache \
  g++ \
  make \
  nodejs \
  npm

RUN gem install bundler

WORKDIR /jekyll

COPY Gemfile* /jekyll/

RUN bundle install

COPY package.json package-lock.json /jekyll/

RUN npm ci
