Rails.application.routes.draw do
  namespace :api do
    get 'categories/index'
  end

  namespace :api do
    get 'reviews/index'
  end

  namespace :api do
    get 'reviews/create'
  end

  namespace :api do
    get 'reviews/show'
  end

  namespace :api do
    get 'reviews/destroy'
  end

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show]
  end
end
