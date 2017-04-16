class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.all.limit(3)
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  private

  def business_params
    params.require(:business).permit()
  end

end
