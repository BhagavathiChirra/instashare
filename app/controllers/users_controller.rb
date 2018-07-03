class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def current_user
    # binding.pry
    puts "USER: ", @current_user

    render json: {user: nil} and return unless @current_user
    render json: @current_user, only: [:email, :id, :name], include: {posts: {include: [:comments]}}
  end

  def create
    user = User.create user_params
    if user.persisted?
      session[:user_id] = user.id
      redirect_to app_path
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path
    end
  end

  def index
    @users = User.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :image)
  end
end
