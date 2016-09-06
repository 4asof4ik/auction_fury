Rails.application.routes.draw do

 #  devise_for :users

  namespace :api do
    namespace :v1 do
      post 'auth_user', to: 'authentication#authenticate_user'
      resources :home, only: [:index]
      resources :i18n, only: [:show]
      devise_for :users
      resources :items do
        collection do
          get :personal
        end
      end
      resources :categories, only: [:index, :update, :destroy, :create]
      resources :users, only: [:show,:index,:update,:destroy]
      resources :auctions
      resources :conversations, only: [:index, :create, :show]
      resources :messages, only: [:create]
    end
  end
end
