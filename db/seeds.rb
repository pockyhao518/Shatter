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
    fake: 'false',
)

u2 = User.create!(
    username: 'Li',
    email: 'li@email.com',
    password: 'password',
    fake: 'false'
)

u3 = User.create!(
    username: 'Hao',
    email: 'hao@email.com',
    password: 'password',
    fake: 'false'
)

u4 = User.create!(
    username: 'Josh',
    email: 'josh@email.com',
    password: 'password',
    fake: 'false',
)

u5 = User.create!(
    username: 'Ara',
    email: 'ara@email.com',
    password: 'password',
    fake: 'false',
)

u6 = User.create!(
    username: 'Daniel',
    email: 'daniel@email.com',
    password: 'password',
    fake: 'false',
)

u7 = User.create!(
    username: 'Megan',
    email: 'megan@email.com',
    password: 'password',
    fake: 'false',
)


f1 = Friend.create!(
    user_id: guest.id,
    friend_id: u3.id
)

f2 = Friend.create!(
    user_id: guest.id,
    friend_id: u2.id
)

f3= Friend.create!(
    user_id: u3.id,
    friend_id: u2.id
)

f4= Friend.create!(
    user_id: guest.id,
    friend_id: u4.id
)

f3= Friend.create!(
    user_id: guest.id,
    friend_id: u5.id
)

f3= Friend.create!(
    user_id: guest.id,
    friend_id: u6.id
)

f3= Friend.create!(
    user_id: guest.id,
    friend_id: u7.id
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


b4 = Bill.create!(
    amount: 200,
    equal: 'true',
    description: 'trip',
    author_id: guest.id,
    date: '2021-01-31' 
)


b5 = Bill.create!(
    amount: 40,
    equal: 'true',
    description: 'movie',
    author_id: guest.id,
    date: '2021-02-08' 
)


b6 = Bill.create!(
    amount: 120,
    equal: 'true',
    description: 'new bike',
    author_id: guest.id,
    date: '2021-02-16' 
)


b7 = Bill.create!(
    amount: 30,
    equal: 'true',
    description: 'AA party',
    author_id: guest.id,
    date: '2021-02-20' 
)

s1 = Split.create!(
    payer_id: guest.id,
    bill_id: b1.id,
    amount: b1.amount/2.00
)

s2 = Split.create!(
    payer_id: u3.id,
    bill_id: b1.id,
    amount: b1.amount/2.00
)

s3 = Split.create!(
    payer_id: u6.id,
    bill_id: b4.id,
    amount: b4.amount/2.00
)

s4 = Split.create!(
    payer_id: u5.id,
    bill_id: b5.id,
    amount: b5.amount/2.00
)

s5 = Split.create!(
    payer_id: u4.id,
    bill_id: b7.id,
    amount: b7.amount/2.00
)