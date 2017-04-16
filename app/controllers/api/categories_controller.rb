require 'byebug'
class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.where("name LIKE ?", "%#{params[:term].downcase}%")
  end

  def search_term

  end
end
