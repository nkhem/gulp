class Api::CategoriesController < ApplicationController
  def index
    @categories = []
    search_terms.each do |search_term|
      @categories += Category.where("alias LIKE ?", "%#{search_term}%")
    end
    render :index
  end

  private

  def search_terms
    params[:term].downcase.split(/[^0-9a-z]/)
  end
end
