User.destroy_all

User.create!({f_name: 'guest', l_name: 'user', email: 'guest@email.com', password: 'guessed password'})

# 'namey' gem generates random :common or :rare names based on US Census Data
@namey = Namey::Generator.new

# generate 30 random first and last names
random_first_names = []
random_last_names = []

30.times do
  name_types = [:common, :rare]

  first_name = @namey.name(name_types.sample).split.first
  last_name = @namey.name(name_types.sample).split.last

  # ensures unique name combinations
  while random_last_names.include?(last_name)
    last_name = @namey.name(name_types.sample).split.last
  end

  random_first_names.push(first_name)
  random_last_names.push(last_name)
end

# turn those 30 randomly generated names into users
30.times do |i|
  User.create!({
    f_name: random_first_names[i],
    l_name: random_last_names[i],
    email: "#{random_first_names[i].downcase}_#{random_last_names[i].downcase}@email.com",
    password: "#{random_last_names[i].downcase}_password"
  })
end


Category.destroy_all

all_categories = [
  "Wineries",
  "Breweries",
  "Distilleries",
  "Wine Bars",
  "Beer Gardens",
  "Pubs",
  "Bars",
  "Juice Bars",
  "Smoothies",
  "Kombucha",
  "Coffee",
  "Tea",
  "Tea Rooms",
  "Bubble Tea",
  "Milkshakes"
]

all_categories.each do |category|
  Category.create!({ name: category })
end
