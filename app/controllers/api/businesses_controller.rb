class Api::BusinessesController < ApplicationController
  def index
    @businesses = []
    search_terms.each do |search_term|
      @businesses += Business.where("alias LIKE ?", "%#{search_term}%")
    end
    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  private

  def search_terms
    params[:term].downcase.split(/[^0-9a-z]/)
  end
end
