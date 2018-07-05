

User.destroy_all

u1 = User.create name: "Anna", email: "anna@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/female-93.jpg'
u2 = User.create name: "Bagi", email: "bagi@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/female-86.jpg'
u3 = User.create name: "Linna", email: "linna@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/female-45.jpg'
u4 = User.create name: "Ben", email: "ben@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/male-47.jpg'
u5 = User.create name: "Scott", email: "scott@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/male-3.jpg'
u6 = User.create name: "Nathan", email: "nathan@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/male-25.jpg'
u7 = User.create name: "Luke", email: "luke@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/male-70.JPG'
u8 = User.create name: "Grant", email: "grant@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/male-96.jpg'
u9 = User.create name: "Ana", email: "ana@ga.com", password: "chicken", image: 'https://d3iw72m71ie81c.cloudfront.net/natalia.JPG'

u1.following << u2 << u3 << u4
u2.following << u3 << u4

puts "Created #{ User.all.length } Users"


puts "Created #{ Following.all.length } Followings"

Post.destroy_all

p1 = Post.create caption: "Largest tree", user: u1, image: "https://images.pexels.com/photos/91153/pexels-photo-91153.jpeg?auto=compress&cs=tinysrgb&h=350"
p2 = Post.create caption: "My favourite", user: u5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzHbSAmqTxbI-BruS9p35Nkxs-CTrHgGEYFp0bEMoB4GYYzC7"
p3 = Post.create caption: "My best bird", user: u2, image: "https://2.bp.blogspot.com/-BqKjJ_ma6Bc/Vn0rndbVH2I/AAAAAAAAopg/jmzxXLW_Itk/s1600/brazilian%2Btanager.JPG"
p4 = Post.create caption: "Look at this cool bub...", user: u2, image: "http://file.vforum.vn/hinh/2016/01/hinh-nen-tre-so-sinh-20.jpg"
p5 = Post.create caption: "Whity White", user: u2, image: "http://subwallpaper.com/Widescreen-Wallpapers/white-tiger-wallpaper-high-quality-resolution-For-Widescreen-Wallpaper.jpg"
p6 = Post.create caption: "My dream house", user: u3, image: "https://www.richardcolearchitecture.com.au/wp-content/uploads/Angophora-Feature.jpg"
p7 = Post.create caption: "I have seen this for the first time", user: u3, image: "https://mcacesblogs.files.wordpress.com/2012/11/hand-tree.jpg"
p8 = Post.create caption: "Colourfull one...", user: u4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Hio_u-c7H99BsyrsiL0RQ6s2mlVOaA1_usp3T33oGCJqlcVM4A"
p9 = Post.create caption: "Biggest house", user: u6, image: "https://d3ljd161w9lywl.cloudfront.net/property/image/R2219091/6976-wiltshire-street-vancouver-bc-3427_262240718-1821856-0_lightbox.jpg"
p10 = Post.create caption: "My love", user: u2, image: "http://freewallpaper-background.com/wp-content/uploads/2016/06/Cute-Baby-High-Res-10.jpg"


puts "Created #{Post.all.length} posts."


Comment.destroy_all

c1 = Comment.create content: 'This is so cool...', post: p1, user: u1
c2 = Comment.create content: 'Yes this is really huge', post: p1, user: u2
c3 = Comment.create content: 'cool and colourfull', post: p3, user: u1
c4 = Comment.create content: 'I have not seen this before', post: p3, user: u3
c5 = Comment.create content: 'Me too!!!', post: p2, user: u2
c6 = Comment.create content: 'Ya good', post: p2, user: u3
c7 = Comment.create content: 'I like this pic', post: p5, user: u5
c8 = Comment.create content: 'nice click!!!', post: p6, user: u5
c9 = Comment.create content: 'This is so cool...', post: p3, user: u1
c10 = Comment.create content: 'Yes this is really cool', post: p3, user: u6
c11 = Comment.create content: 'cool and colourfull', post: p9, user: u5
c12 = Comment.create content: 'I have not seen this before', post: p1, user: u8
c13 = Comment.create content: 'Me too!!!', post: p5, user: u6
c14 = Comment.create content: 'Ya good', post: p5, user: u9
c15 = Comment.create content: 'I too like this pic', post: p5, user: u4
c16 = Comment.create content: 'nice click!!!', post: p10, user: u5

puts "Created #{Comment.all.length} comments."
