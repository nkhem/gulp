class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.joins(:businesses).where('businesses.id = ?', params[:businessId])
    render :index
  end

  def create
  end

  def destroy
  end
end
