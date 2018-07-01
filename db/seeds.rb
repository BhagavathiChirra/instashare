# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

# Like.destroy_all
# Follow.destroy_all


u1 = User.create name: "Anna", email: "anna@ga.com", password: "chicken", password_confirmation: "chicken", image: 'https://orig00.deviantart.net/c134/f/2013/153/2/4/pooh_bear_by_kunal908-d67le2z.png'
u2 = User.create name: "Bagi", email: "bagi@ga.com", password: "chicken", password_confirmation: "chicken", image: 'https://static.giantbomb.com/uploads/scale_small/0/495/355011-piglet_disney_1.jpg'
u3 = User.create name: "Linna", email: "linna@ga.com", password: "chicken", password_confirmation: "chicken", image: 'https://i.pinimg.com/originals/27/7e/4e/277e4e7c6c1c0d2d927d68289e6eb8d7.jpg'

puts "Created #{ User.all.length } users"

Post.destroy_all

p1 = Post.create caption: "my first user1 post", user: u1, image: "https://i.ytimg.com/vi/dzjQ-akB3BI/maxresdefault.jpg"
p2 = Post.create caption: "my second user1 post", user: u1, image: "https://images.trvl-media.com/hotels/1000000/70000/68800/68751/68751_232_z.jpg"
p3 = Post.create caption: "my third user1 post", user: u1, image: "https://i.ytimg.com/vi/iXCW5t7asms/maxresdefault.jpg"
p4 = Post.create caption: "my first user2 post", user: u2, image: "https://i.ytimg.com/vi/dzjQ-akB3BI/maxresdefault.jpg"
p5 = Post.create caption: "my second user2 post", user: u2, image: "https://i.ytimg.com/vi/dzjQ-akB3BI/maxresdefault.jpg"
p6 = Post.create caption: "my first user3 post", user: u3, image: "https://i.ytimg.com/vi/dzjQ-akB3BI/maxresdefault.jpg"
p7 = Post.create caption: "my second user3 post", user: u3, image: "https://i.ytimg.com/vi/dzjQ-akB3BI/maxresdefault.jpg"


puts "Created #{Post.all.length} posts."


Comment.destroy_all

c1 = Comment.create content: 'Sydney is the best place ever.', post: p1, user: u1
c2 = Comment.create content: 'Sydney is really cool.', post: p1, user: u2
c3 = Comment.create content: 'I love Phuket.', post: p3, user: u1
c4 = Comment.create content: 'I have not visited Phuket.', post: p3, user: u3
c5 = Comment.create content: 'New York is amazinggg!!!', post: p2, user: u2
c6 = Comment.create content: 'Phuket is lovely.', post: p2, user: u3
c7 = Comment.create content: 'Sydney is the greatest city to live in.', post: p2, user: u1
c8 = Comment.create content: 'My trip to Dubai was really great!', post: p2, user: u2

puts "Created #{Comment.all.length} comments."
