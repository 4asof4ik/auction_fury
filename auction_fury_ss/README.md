# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* Development
INSTALLING REDIS

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-redis - how to install  and configure redis

After you installed redis you need sidekiq gem.

Run
 gem install sidekiq
or install it from your Gemfile
 bundle install

After that run sidekiq server, run:
 sidekiq

* ...
