# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
    username: 'steven', 
    email: 'steven@gmail.com',
    name: 'Steven Z',
    password: "123",
    age: 25,
    summary: Faker::TvShows::MichaelScott.quote, 
    work_info: 'Engineer',
    gender: 'male',
    budget: rand(23..45)*50,
    move_in_date: Faker::Date.between(from: 1.day.from_now, to: 1.year.from_now),
    cleaning: 'Every Few Days',
    guests: 'Fine With Having Guests',
    schedule: 'I Sleep Early',
    pets: 'No Pet, But Fine Living With Them'
)

User.create(
    username: 'jerry', 
    email: 'jerry@gmail.com',
    name: 'Jerry Huang',
    password: "123",
    age: 27,
    summary: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    work_info: 'Engineer',
    gender: 'male',
    budget: rand(23..45)*50,
    move_in_date: Faker::Date.between(from: 1.day.from_now, to: 1.year.from_now),
    cleaning: 'Every Few Days',
    guests: 'Fine With Having Guests',
    schedule: 'I Sleep Early',
    pets: 'No Pet, But Fine Living With Them'
)

User.create(
    username: 'tom', 
    email: 'tom@gmail.com',
    name: 'Tom Humphrey',
    password: "123",
    age: 28,
    summary: "I am Beyonce, Always", 
    work_info: 'Engineer',
    gender: 'male',
    budget: rand(23..45)*50,
    move_in_date: Faker::Date.between(from: 1.day.from_now, to: 1.year.from_now),
    cleaning: 'Every Few Days',
    guests: 'Fine With Having Guests',
    schedule: 'I Sleep Early',
    pets: 'No Pet, But Fine Living With Them'
)

30.times do 
    User.create(
        username: Faker::Internet.unique.user_name, 
        email: Faker::Internet.email,
        name: Faker::Name.male_first_name + ' ' + Faker::Name.last_name,
        password: "123",
        age: rand(18..45),
        summary: Faker::Movies::HarryPotter.quote,
        work_info: Faker::Company.industry,
        gender: 'male',
        budget: rand(23..45)*50,
        move_in_date: Faker::Date.between(from: 1.day.from_now, to: 1.year.from_now),
        cleaning: ['Every Few Days', 'Once a Week', 'Every Few Weeks', 'Once a Month'].sample,
        guests: ['Fine With Having Guests', 'Not Fine with Guests'].sample,
        schedule: ['I Sleep Early', 'I Sleep Late', 'I Work Late', 'In Bed By 12'].sample,
        pets: ['I Do Have a Pet(s)', 'I Have No Pets', 'No Pet, But Fine Living With Them', "No Pets, Please"].sample
        )
end

User.create(
    username: 'mike', 
    email: 'mike@gmail.com',
    name: 'Mike Scott',
    password: "123",
    age: 49,
    summary: "The worst thing about prison was the... was the Dementors. They were flying all over the place and they were scary and then they'd come down and they'd suck the soul out of your body and it hurt!",
    work_info: 'Regional Manager, Scranton Branch, Dunder Mifflin',
    gender: 'male',
    budget: rand(23..45)*50,
    move_in_date: Faker::Date.between(from: 1.day.from_now, to: 1.year.from_now),
    cleaning: 'Every Few Days',
    guests: 'Fine With Having Guests',
    schedule: 'I Sleep Early',
    pets: 'No Pet, But Fine Living With Them',
)



30.times do 
    User.create(
        username: Faker::Internet.unique.user_name, 
        email: Faker::Internet.email,
        name: Faker::Name.female_first_name + ' ' + Faker::Name.last_name,
        password: "123",
        age: rand(18..34),
        summary: Faker::TvShows::MichaelScott.quote,
        work_info: Faker::Company.industry,
        gender: 'female',
        budget: rand(23..45)*50,
        move_in_date: Faker::Date.between(from: 1.day.from_now, to: 1.year.from_now),
        cleaning: ['Every Few Days', 'Once a Week', 'Every Few Weeks', 'Once a Month'].sample,
        guests: ['Fine With Having Guests', 'Not Fine with Guests'].sample,
        schedule: ['I Sleep Early', 'I Sleep Late', 'I Work Late', 'In Bed By 12'].sample,
        pets: ['I Do Have a Pet(s)', 'I Have No Pets', 'No Pet, But Fine Living With Them', "No Pets, Please"].sample
    )
end