class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.where("alias LIKE ?", search_term)
    render :index
  end

  private

  def search_term
    params[:term] === "bars" ? "bars" : "%#{params[:term]}%"
  end
end
