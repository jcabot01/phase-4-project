require 'faker'

# User.destroy_all
# Review.destroy_all
Rv.destroy_all

puts "seeding database..."
# u1 = User.create(username: "trailerparkboy")
# u2 = User.create(username: "handydandy123")
# u3 = User.create(username: "hobolife2003")

rv1 = Rv.create(name: "Sprinter", image_url: "https://tinyurl.com/ynvf9d3w", description: "A well-maintained high-performance vehicle.  Features a kitchenette, bathroom, shower, sleeps 4 adults.  Well worth the expense!", region: "HTX", mileage: Faker::Number.within(range: 21000..140000))
rv2 = Rv.create(name: "Well-Loved", image_url: "https://tinyurl.com/28kz4yu9", description: "She's a little rusty, but don't let that deter you.  Features a kitchenette, bathroom, shower, living/dinning area, sleeps 8 adults.", region: "HTX", mileage: Faker::Number.within(range: 21000..140000))
rv3 = Rv.create(name: "Palace on Wheels", image_url: "https://tinyurl.com/2cdy5e9a", description: "Get your checkbook ready.  She's a beaut!  Features a kitchenette, bathroom, shower, dining/living area, jacuzzi, 4-wheeler, satelite tv, sleeps 10 adults.", region: "DFW", mileage: Faker::Number.within(range: 21000..140000))
rv4 = Rv.create(name: "Hot Rod", image_url: "https://tinyurl.com/eb73ee5t", description: "An efficient and compact vehicle.  Features a kitchenette, sleeps 2 adults.  Tiny, but mighty!", region: "HTX", mileage: Faker::Number.within(range: 21000..140000))
rv5 = Rv.create(name: "Pizza Cart", image_url: "https://tinyurl.com/39pe6wkd", description: "A bed on wheels with a built-in pizza oven.  Features an oven for cooking, sleeps 3 adults.  No frills!", region: "ATX", mileage: Faker::Number.within(range: 21000..140000))

# r1 = Review.create(review: "Absolutely loved this camper!  I didn't even mind the smell.", user_id: u1, rv_id: rv1)
# r2 = Review.create(review: "Not bad.  Might do this one again if the price is right.", user_id: u2, rv_id: rv2)
# r3 = Review.create(review: "I did not like this RV.  Too many spiders and it smells old.", user_id: u3, rv_id: rv3)
puts "🌴 database seeded 😀"