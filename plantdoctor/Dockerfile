FROM ruby:2.7.2

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev
RUN mkdir /app

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle install

COPY . /app

ENV RAILS_ENV=production

CMD ["rails s -b 0.0.0.0"]