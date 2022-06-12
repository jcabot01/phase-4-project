Rails.application.routes.draw do
  resource :reviews    #need all get, show, create, update, delete

  get '/users', to: 'users#index'  
  get '/users/:id', to: 'users#show'
  get '/rvs', to: 'rvs#index'  
  get '/rvs/:id', to: 'rvs#show'
  post '/login', to: 'sessions#create'  #login existing user params[username and password], set session hash
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'  #create new user params[username, pw, pw-confirm] & set session hash
  get '/me', to: 'users#show' #check if session hash and user.id match, useEffect on every page load

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
