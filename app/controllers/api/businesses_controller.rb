class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.where("alias LIKE ?", "%#{search_term}%")
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  private

  def search_term
    params[:term].downcase.gsub(/[^0-9a-z]/, '')
  end
end
