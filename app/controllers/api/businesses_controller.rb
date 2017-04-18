class Api::BusinessesController < ApplicationController
  def index
    if search_terms
      @businesses = []
      search_terms.each do |search_term|
        @businesses += Business.where("alias LIKE ?", "%#{search_term}%")
      end
    elsif category
      @businesses = Business.joins(:categories).where('categories.alias = ?', category)
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
    params[:category].downcase.gsub(/[^0-9a-z]/, '') if params[:category]
  end
end
