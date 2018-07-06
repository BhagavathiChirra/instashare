class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def current_user
    # binding.pry
    puts "USER: ", @current_user

    render json: {user: nil} and return unless @current_user
    render json: @current_user, only: [:email, :id, :name], include: {
      posts: {
        include: {
          user: {
            only: [:name, :created_at, :image]
          },
          comments: {
            include: {
              user: {
                only: [:name, :created_at, :image]
              }
            }
          }
        }
      }
    }
  end

  def create
    user = User.new user_params
    if params[:file].present?
      req = Cloudinary::Uploader.upload(params[:file])
      user.image = req["public_id"]
    end
    user.save
    if user.persisted?
      session[:user_id] = user.id
      redirect_to app_path
    else
      flash[:errors] = user.errors.full_messages
      redirect_to new_user_path
    end
  end

  def index
    users = User.all
    render json: users, only: [:name, :image]
  end

  def show
    # we are using resources for this route, but want to use the username to search
    username = params[:id]

    user = User.find_by(name: username)
    render json: user, only: [:name, :image, :email],
      # get an array of all the ids of the .followers association
      methods: :follower_ids,
      include: {

        # followers: {
        #   only: [:id, :name]
        # },
        posts: {
          include: {
            user: {
              only: [:name, :created_at, :image]
            },
            comments: {
              include: {
                user: {
                  only: [:name, :created_at, :image]
                }
              }
            }
          }
        }
      }
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def follow

    to_follow = User.find_by(name: params[:name])

    if @current_user.following.include? ( to_follow )
      @current_user.following.destroy( to_follow )
      render json: { status: 'unfollow' }
    else
      @current_user.following << to_follow
      render json: {status: 'follow'}
    end

  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :image)
  end
end
