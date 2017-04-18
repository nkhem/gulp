class Api::BusinessesController < ApplicationController
  def index
    @businesses = []
    if search_terms
      search_terms.each do |search_term|
        @businesses += Business.where("alias LIKE ?", "%#{search_term}%")
      end
    elsif category
      @businesses += Business.where("alias LIKE ?", "%kava%")
    end

    render :index
  end

  def show
    @business = Business.find(params[:id])
    render :show
  end

  private

  def search_terms
    params[:term].downcase.split(/[^0-9a-z]/) if params[:term]
  end

  def category
    params[:category] if params[:category]
  end
end
