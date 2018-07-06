Rails.application.routes.draw do

  root :to => 'session#new'

  get '/current_user' => 'users#current_user'

  get '/app' => 'pages#app'
  get "/login" => "session#new"
  post '/login' => 'session#create'
  delete "/login" => "session#destroy"

  get "/comments/:id" => "comments#index"
  post "/comments" => "comments#create"
  delete "/comments" => "comments#destroy"

  post "/follow" => "users#follow"

  get "/following_posts" => "posts#get_following_posts"

  # post "/users" => "users#create"
  # post "posts" => "posts#create"

  resources :users
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
