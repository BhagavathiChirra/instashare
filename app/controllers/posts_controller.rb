class PostsController < ApplicationController
  before_action :check_if_logged_in, only: [:create, :show]
  def create
    puts "%" * 80
    puts params
    post = Post.new caption: params[:caption]
    post.user = @current_user

    if params[:image].present?
      req = Cloudinary::Uploader.upload(params[:image])
      post.image = req["public_id"]
    end
    post.save

    render json: {status: 'success', post: post }, include: {
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
  end

  def get_following_posts
    posts = Post.where user_id: @current_user.following_ids
    render json: posts, include: {
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
  end

  def update
  end

  def destroy
  end

  def index
  end

  def show
    post = Post.find params[:id]
    render json: post
  end

  private
  def post_params
    params.require(:post).permit(:caption, :image)
  end
end
