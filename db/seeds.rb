# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(:email => "waltercronkite@domain.com", :password => "test")
User.create(:email => "edmurrow@domain.com", :password => "test")
User.create(:email => "mikewallace@domain.com", :password => "test")