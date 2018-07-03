class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @comments = Comment.where post_id: params[:id]
    render :json => @comments.as_json( :include => [ :user ])
  end

  def create
  end

  def destroy
  end
end
