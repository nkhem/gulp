class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.joins(:business).where('reviews.business_id = ?', params[:businessId])
    render :index
  end

  def create

    begin
      @review = Review.create!(
      business_id: params[:review][:businessId],
      user_id: params[:review][:userId],
      content: params[:review][:content],
      rating: params[:review][:rating]
      )
    rescue ActiveRecord::RecordInvalid => invalid
      render json: invalid.record.errors.full_messages, status: 404
    end

    if @review
      render :index
    end
  end

  def destroy
  end
end
