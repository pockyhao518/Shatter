# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bill.destroy_all

guest = User.create!(
    username: 'DemoUser',
    email: 'demo@email.com',
    password: 'password',
)

u3 = User.create!(
    username: 'user3',
    email: 'user3@email.com',
    password: 'password',
)

b1 = Bill.create!(
    amount: 30,
    equal: 'true',
    description: 'lunch',
    author_id: guest.id,
    date: '2021-01-25' 
)

b2 = Bill.create!(
    amount: 20,
    equal: 'true',
    description: 'dinner',
    author_id: guest.id,
    date: '2021-01-25' 
)

b3 = Bill.create!(
    amount: 60,
    equal: 'true',
    description: 'dinner',
    author_id: u3.id,
    date: '2021-01-25' 
)