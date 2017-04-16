class Api::BusinessesController < ApplicationController
  def index
    @businesses = Business.where("lower(name) LIKE ?", search_term)
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  private

  def search_term
    "%#{params[:term].downcase.gsub(/[^a-z]/, '')}%"
  end
end
