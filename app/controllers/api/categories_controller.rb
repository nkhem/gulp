class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.where("alias LIKE ?", search_term)
    render :index
  end

  private

  def search_term
    term = params[:term].downcase.gsub(/[^0-9a-z]/, '')
    term === "bars" ? "%bars%" : "%#{params[:term]}%"
  end
end
