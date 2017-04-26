class Api::ReviewsController < ApplicationController
  def index
    @reviews =  Review.joins(:business).where('reviews.business_id = ?', params[:businessId])
    render :index
  end

  def create
  end

  def destroy
  end
end
