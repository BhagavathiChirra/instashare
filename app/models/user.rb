class User < ApplicationRecord
  has_secure_password

  has_many :posts
  has_many :comments
  has_many :comment_posts, through: :comments, source: :post

  has_and_belongs_to_many :liked_posts, class_name: 'Post'

    has_many :active_relationships, class_name: 'Following', foreign_key: 'follower_id', dependent: :destroy
    has_many :passive_relationships, class_name: 'Following', foreign_key: 'user_id', dependent: :destroy

    has_many :followers, through: :passive_relationships, source: :follower
    has_many :following, through: :active_relationships, source: :followed

end
