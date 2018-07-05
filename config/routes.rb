Rails.application.routes.draw do



  get '/current_user' => 'users#current_user'

  get '/app' => 'pages#app'
  get "/login" => "session#new"
  post '/login' => 'session#create'
  delete "/login" => "session#destroy"

  get "/comments/:id" => "comments#index"
  post "/comments" => "comments#create"
  delete "/comments" => "comments#destroy"

  # get 'users/index' => "users#index"
  # get 'users/show'
  # get 'users/edit'
  # get 'users/update'
  # get 'users/destroy'
  # post "/users" => "users#create"

  # post "posts" => "posts#create"
  get "/users/:username" => "users#show"
  resources :users
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
