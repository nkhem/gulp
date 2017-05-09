Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show]
    resources :reviews, only: [:index, :create, :show, :destroy, :update]
    resources :categories, only: [:index]
    resources :photos, only: [:index, :create, :show, :destroy]
  end
end
