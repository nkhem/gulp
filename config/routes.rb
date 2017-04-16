Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show]
    resources :reviews, only: [:index, :create, :show, :destroy]
    resources :categories, only: [:index]
    resources :photos, only: [:index, :create, :show, :destroy]
  end
end
