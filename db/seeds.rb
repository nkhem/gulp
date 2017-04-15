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

User.destroy_all
User.create!({f_name: 'Nicole', l_name: 'Hemenway', email: 'nkhemenway@gmail.com', password: 'asdfasdf'})
