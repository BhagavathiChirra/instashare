# INSTASHARE.

This is am image sharing project developed using Ruby inspired by Instagram.

This site allows the user to share their images.

You can sign up


## Login or Sign up for this site here.

Start sharing your images here: [INSTASHARE ](https://instasharebagi.herokuapp.com/)

Login: Email: bagi@ga.com, password: chicken

## Ruby version:

ruby 2.4.1p111

## System dependencies

bundle install

Except for standard Gems that come with a Rails project, we installed 'annotate' (to annotate all models, tests, fixtures and factories), 'pry-rails' (to use pry as rails console ), 'pry-byebug' (to add step by step debugging), 'cloudinary' (to let users upload photos from their computer), 'webpacker' (to include the react application in the project ) , and  'boostrap'

See Gemfile/Gemfile.lock

## Configuration

Ensure following values are stored in your environment:

```
ENV["CLOUDINARY_CLOUD_NAME"]
ENV["CLOUDINARY_API_KEY"]
ENV["CLOUDINARY_API_SECRET"]

```

## Database creation

Database can be initialized using:

```
$ rails db:migrate
```

## Database initialization

Demo data can be populated in to the site using:

```
$ rails db:seed
```

## Services

  - Cloudinary

## Deployment instructions:

Push to Heroku enables rapid deployment of this app.

```
<!-- $ heroku create project2-travelmate
$ git push heroku master
$ heroku run rails db:migrate
$ heroku ps:scale web=1
$ heroku run
$ heroku run rails db:seed -->

```

## Technologies used:

- HTML
- CSS
- Javascript
- Ruby on Rails
- React
- AJAX
- Bootstrap

## Unsolved problems:

- Not responsive

## Wish list:

- Improving CSS styles
- Showing number of followers and followings
