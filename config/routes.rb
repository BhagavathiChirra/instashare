Rails.application.routes.draw do

  get '/app' => 'pages#app'
  get "/login" => "session#new"
  post '/login' => 'session#create'
  # get 'users/new'
  # get 'users/create'
  get 'users/index' => "users#index"
  # get 'users/show'
  # get 'users/edit'
  # get 'users/update'
  # get 'users/destroy'
  post "/users" => "users#create"

  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
