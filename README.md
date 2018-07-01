# README


You need to allow webpack-dev-server host as allowed origin for connect-src.
This can be done in Rails 5.2+ for development environment in the CSP initializer
config/initializers/content_security_policy.rb with a snippet like this:
policy.connect_src :self, :https, "http://localhost:3035", "ws://localhost:3035" if Rails.env.development?
Webpacker successfully installed 🎉 🍰


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

* ...
