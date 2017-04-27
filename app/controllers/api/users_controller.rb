class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find_by(id: params[:userId])
    render :show
  end

  private

  def user_params
    params.permit(:f_name, :l_name, :email, :password)
  end
end
