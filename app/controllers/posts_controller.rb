class PostsController < ApplicationController
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

    render json: {status: 'success', post_id: post.id }, status: :ok
  end

  def update
  end

  def destroy
  end

  def index
  end

  def show
  end

  private
  def post_params
    params.require(:post).permit(:caption, :image)
  end
end
