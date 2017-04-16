class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.where("alias LIKE ?", "%#{params[:term]}%")
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end
end
