Rails.application.routes.draw do
  get 'businesses/index'

  get 'businesses/show'

  get 'static_pages/root'

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
  end
end
