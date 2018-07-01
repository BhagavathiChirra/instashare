class User < ApplicationRecord
  has_secure_password

  has_many :posts
  has_many :comments
  has_many :comment_posts, through: :comments, source: :post
end
