class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :users, :through => :comments
  has_and_belongs_to_many :liked_by, class_name: 'User'
end
