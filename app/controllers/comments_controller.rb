class CommentsController < ApplicationController
  before_action :check_if_logged_in, only: [:index]

  def index
    @comments = Comment.where post_id: params[:id]
    render :json => @comments.as_json( :include => [ :user ])
  end

  def create
    comment = Comment.new content: params[:content], post_id: params[:post_id]
    comment.user = @current_user
    comment.save
    render json: {status: 'success', comment: comment }, include: {
      user: {
        only: [:name, :created_at, :image]
      }
    }
  end

  def destroy
    Comment.destroy( params[:id] )
    render json: {status: 'success'}
  end
end
