class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    puts "PARAMS ----------------------------------"
    p params
    user = User.create name: params[:name], email: params[:email], password: params[:password], password_confirmation: params[:password_confirmation], image: params[:image]
    # render json: user, status: :ok
    # if successful:
      # redirect_to app_path
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

  # private
  # def user_params
  #   params.require(:user).permit(:name, :email, :password, :password_confirmation, :image)
  # end
end
