puts "🌱 Starting seeding..."

puts "Seeding users..."
User.create(
  username: "sample-user-1",
  password: "12345"
)

puts "Seeding items..."
20.times do
  Item.create(
    product_name: Faker::Food.fruits,
    category: "fruit", 
    price: rand(0.10..5.00),
    quantity: rand(0..10)
  )
end

20.times do
  Item.create(
    product_name: Faker::Food.ingredient,
    category: "misc", 
    price: rand(0.10..5.00),
    quantity: rand(0..10)
  )
end

10.times do
  Item.create(
    product_name: Faker::Food.spice,
    category: "spice", 
    price: rand(0.10..5.00),
    quantity: rand(0..10)
  )
end

20.times do
  Item.create(
    product_name: Faker::Food.vegetables,
    category: "vegetable", 
    price: rand(0.10..5.00),
    quantity: rand(0..10)
  )
end

puts "Seeding item grocery lists..."
30.times do
  ItemGroceryList.create(user_id: User.ids.sample, item_id: Item.ids.sample)
end

puts "✅ Done seeding!"
