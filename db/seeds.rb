User.destroy_all

User.create!({f_name: 'guest', l_name: 'user', email: 'guest@email.com', password: 'guessed password'})

# 'namey' gem generates random :common or :rare names based on US Census Data
@namey = Namey::Generator.new

# generate 30 random first and last names
all_first_names = []
all_last_names = []

30.times do
  name_types = [:common, :rare]

  first_name = @namey.name(name_types.sample).split.first
  last_name = @namey.name(name_types.sample).split.last

  # ensures unique name combinations
  while all_last_names.include?(last_name)
    last_name = @namey.name(name_types.sample).split.last
  end

  all_first_names.push(first_name)
  all_last_names.push(last_name)
end

# turn those 30 randomly generated names into users
30.times do |i|
  User.create!({
    f_name: all_first_names[i],
    l_name: all_last_names[i],
    email: "#{all_first_names[i].downcase}_#{all_last_names[i].downcase}@email.com",
    password: "#{all_last_names[i].downcase}_password"
  })
end


Category.destroy_all

all_categories = {
  wineries: "Wineries",
  breweries: "Breweries",
  distilleries: "Distilleries",
  # wine_bars: "Wine Bars",
  # beer_gardens: "Beer Gardens",
  # pubs: "Pubs",
  # bars: "Bars",
  # juice_bars: "Juice Bars",
  # smoothies: "Smoothies",
  # kombucha: "Kombucha",
  # coffee: "Coffee",
  # tea: "Tea",
  # tea_rooms: "Tea Rooms",
  # bubble_tea: "Bubble Tea",
  milkshakes: "Milkshakes"
}

all_categories.each do | category_sym, category_s|
  Category.create!({ name: category_s })
end

Business.destroy_all

all_businesses_by_category = {
  
  wineries: [{"id"=>"bluxome-street-winery-san-francisco", "name"=>"Bluxome Street Winery", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/o0UdXbGotH4L3evuwVIvtQ/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/bluxome-street-winery-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>116, "categories"=>[{"alias"=>"beer_and_wine", "title"=>"Beer, Wine & Spirits"}, {"alias"=>"wine_bars", "title"=>"Wine Bars"}, {"alias"=>"wineries", "title"=>"Wineries"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7767348, "longitude"=>-122.3968428}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"53 Bluxome St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94107", "country"=>"US", "state"=>"CA", "display_address"=>["53 Bluxome St", "San Francisco, CA 94107"]}, "phone"=>"+14155435353", "display_phone"=>"(415) 543-5353", "distance"=>3901.0961650319996}, {"id"=>"eristavi-winery-san-francisco-3", "name"=>"Eristavi Winery", "image_url"=>"https://s3-media4.fl.yelpcdn.com/bphoto/3ulhr-FH6KmuWmWTNp1PYQ/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/eristavi-winery-san-francisco-3?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>25, "categories"=>[{"alias"=>"wineries", "title"=>"Wineries"}, {"alias"=>"venues", "title"=>"Venues & Event Spaces"}], "rating"=>5.0, "coordinates"=>{"latitude"=>37.75112, "longitude"=>-122.40644}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"1300 Potrero Ave", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94110", "country"=>"US", "state"=>"CA", "display_address"=>["1300 Potrero Ave", "San Francisco, CA 94110"]}, "phone"=>"+14155780599", "display_phone"=>"(415) 578-0599", "distance"=>2854.824963136}, {"id"=>"jax-vineyards-san-francisco", "name"=>"JAX Vineyards", "image_url"=>"https://s3-media3.fl.yelpcdn.com/bphoto/ysuQqOeM0ZGZbgHKGpTS9A/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/jax-vineyards-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>52, "categories"=>[{"alias"=>"winetastingroom", "title"=>"Wine Tasting Room"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.781509, "longitude"=>-122.392899}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"326 Brannan St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94107", "country"=>"US", "state"=>"CA", "display_address"=>["326 Brannan St", "San Francisco, CA 94107"]}, "phone"=>"+14154469505", "display_phone"=>"(415) 446-9505", "distance"=>4461.373080104}, {"id"=>"wattle-creek-winery-tasting-room-san-francisco", "name"=>"Wattle Creek Winery Tasting Room", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/yPxBiKzKyPyH4dNACY4MnQ/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/wattle-creek-winery-tasting-room-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>160, "categories"=>[{"alias"=>"winetastingroom", "title"=>"Wine Tasting Room"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.80585, "longitude"=>-122.42292}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"900 N Point St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94109", "country"=>"US", "state"=>"CA", "display_address"=>["900 N Point St", "San Francisco, CA 94109"]}, "phone"=>"+14153591206", "display_phone"=>"(415) 359-1206", "distance"=>5107.55592064}, {"id"=>"tank18-san-francisco", "name"=>"Tank18", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/uKpu3ufCsQELSG_X97qldg/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/tank18-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>92, "categories"=>[{"alias"=>"wine_bars", "title"=>"Wine Bars"}, {"alias"=>"venues", "title"=>"Venues & Event Spaces"}, {"alias"=>"wineries", "title"=>"Wineries"}], "rating"=>4.0, "coordinates"=>{"latitude"=>37.7742614746094, "longitude"=>-122.413642883301}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"1345 Howard St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94103", "country"=>"US", "state"=>"CA", "display_address"=>["1345 Howard St", "San Francisco, CA 94103"]}, "phone"=>"", "display_phone"=>"", "distance"=>2495.158877358}],

  breweries: [{"id"=>"anchor-brewing-company-san-francisco", "name"=>"Anchor Brewing Company", "image_url"=>"https://s3-media1.fl.yelpcdn.com/bphoto/M0aGA3a4Eh6g1StyGk_Giw/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/anchor-brewing-company-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>511, "categories"=>[{"alias"=>"breweries", "title"=>"Breweries"}], "rating"=>5.0, "coordinates"=>{"latitude"=>37.76311, "longitude"=>-122.40095}, "transactions"=>[], "price"=>"$", "location"=>{"address1"=>"1705 Mariposa St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94107", "country"=>"US", "state"=>"CA", "display_address"=>["1705 Mariposa St", "San Francisco, CA 94107"]}, "phone"=>"+14158638350", "display_phone"=>"(415) 863-8350", "distance"=>3128.1411065439997}, {"id"=>"barebottle-brewing-company-san-francisco", "name"=>"Barebottle Brewing Company", "image_url"=>"https://s3-media3.fl.yelpcdn.com/bphoto/m-sYbKh8LRxrnhWJfMapXA/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/barebottle-brewing-company-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>102, "categories"=>[{"alias"=>"breweries", "title"=>"Breweries"}, {"alias"=>"venues", "title"=>"Venues & Event Spaces"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7400856018066, "longitude"=>-122.409004211426}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"1525 Cortland Ave", "address2"=>"", "address3"=>nil, "city"=>"San Francisco", "zip_code"=>"94110", "country"=>"US", "state"=>"CA", "display_address"=>["1525 Cortland Ave", "San Francisco, CA 94110"]}, "phone"=>"+14159268617", "display_phone"=>"(415) 926-8617", "distance"=>3339.28233026}, {"id"=>"standard-deviant-brewing-san-francisco", "name"=>"Standard Deviant Brewing", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/K2nagU5mFpxm9_MidLCDkw/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/standard-deviant-brewing-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>44, "categories"=>[{"alias"=>"breweries", "title"=>"Breweries"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.76849, "longitude"=>-122.41949}, "transactions"=>[], "price"=>"$", "location"=>{"address1"=>"280 14th St", "address2"=>nil, "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94103", "country"=>"US", "state"=>"CA", "display_address"=>["280 14th St", "San Francisco, CA 94103"]}, "phone"=>"+14155902550", "display_phone"=>"(415) 590-2550", "distance"=>1715.230870518}, {"id"=>"cellarmaker-brewing-company-san-francisco", "name"=>"Cellarmaker Brewing Company", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/Qe1mF0KEqenrCMztzwrEGQ/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/cellarmaker-brewing-company-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>309, "categories"=>[{"alias"=>"breweries", "title"=>"Breweries"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.777217, "longitude"=>-122.410766}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"1150 Howard St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94103", "country"=>"US", "state"=>"CA", "display_address"=>["1150 Howard St", "San Francisco, CA 94103"]}, "phone"=>"+14158633940", "display_phone"=>"(415) 863-3940", "distance"=>2896.220245682}, {"id"=>"harmonic-brewing-san-francisco", "name"=>"Harmonic Brewing", "image_url"=>"https://s3-media3.fl.yelpcdn.com/bphoto/KGdiTZeJCdH49AcdP2MzDw/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/harmonic-brewing-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>68, "categories"=>[{"alias"=>"breweries", "title"=>"Breweries"}], "rating"=>5.0, "coordinates"=>{"latitude"=>37.7516212463379, "longitude"=>-122.390068054199}, "transactions"=>[], "price"=>"$", "location"=>{"address1"=>"1050 26th St", "address2"=>nil, "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94107", "country"=>"US", "state"=>"CA", "display_address"=>["1050 26th St", "San Francisco, CA 94107"]}, "phone"=>"+14158726817", "display_phone"=>"(415) 872-6817", "distance"=>4205.806991292}],

  distilleries: [{"id"=>"distillery-no-209-san-francisco", "name"=>"Distillery No. 209", "image_url"=>"https://s3-media3.fl.yelpcdn.com/bphoto/EAKHZAzLwCYQC-7oz2-aDA/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/distillery-no-209-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>26, "categories"=>[{"alias"=>"distilleries", "title"=>"Distilleries"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7739306486279, "longitude"=>-122.38730732122}, "transactions"=>[], "location"=>{"address1"=>"401 Terry Francois Blvd", "address2"=>"", "address3"=>"Pier 50, Shed B", "city"=>"San Francisco", "zip_code"=>"94158", "country"=>"US", "state"=>"CA", "display_address"=>["401 Terry Francois Blvd", "Pier 50, Shed B", "San Francisco, CA 94158"]}, "phone"=>"+14153690209", "display_phone"=>"(415) 369-0209", "distance"=>4556.036390112}, {"id"=>"seven-stills-san-francisco", "name"=>"Seven Stills", "image_url"=>"https://s3-media1.fl.yelpcdn.com/bphoto/DwWGMemxdsc6syc9z6AhFw/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/seven-stills-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>56, "categories"=>[{"alias"=>"breweries", "title"=>"Breweries"}, {"alias"=>"distilleries", "title"=>"Distilleries"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7230425, "longitude"=>-122.3935658}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"1439 Egbert Ave", "address2"=>"Unit C", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94107", "country"=>"US", "state"=>"CA", "display_address"=>["1439 Egbert Ave", "Unit C", "San Francisco, CA 94107"]}, "phone"=>"+14159140936", "display_phone"=>"(415) 914-0936", "distance"=>5667.5402576999995}, {"id"=>"anchor-distilling-san-francisco", "name"=>"Anchor Distilling", "image_url"=>"https://s3-media4.fl.yelpcdn.com/bphoto/z7Au3j5yHvFj_vA-uhQlyA/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/anchor-distilling-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>9, "categories"=>[{"alias"=>"distilleries", "title"=>"Distilleries"}, {"alias"=>"venues", "title"=>"Venues & Event Spaces"}, {"alias"=>"tastingclasses", "title"=>"Tasting Classes"}], "rating"=>5.0, "coordinates"=>{"latitude"=>37.76311, "longitude"=>-122.40095}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"1705 Mariposa St", "address2"=>nil, "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94107", "country"=>"US", "state"=>"CA", "display_address"=>["1705 Mariposa St", "San Francisco, CA 94107"]}, "phone"=>"+14158638350", "display_phone"=>"(415) 863-8350", "distance"=>3128.1411065439997}, {"id"=>"the-whisky-shop-san-francisco", "name"=>"The Whisky Shop", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/NipjlhVn-XNSS8OrPO6zpg/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/the-whisky-shop-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>71, "categories"=>[{"alias"=>"beer_and_wine", "title"=>"Beer, Wine & Spirits"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7895818, "longitude"=>-122.4064392}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"360 Sutter St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94108", "country"=>"US", "state"=>"CA", "display_address"=>["360 Sutter St", "San Francisco, CA 94108"]}, "phone"=>"+14159891030", "display_phone"=>"(415) 989-1030", "distance"=>4138.51597974}, {"id"=>"st-george-spirits-alameda", "name"=>"St. George Spirits", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/j9pPuQWEBHg4v4aOi8nN6A/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/st-george-spirits-alameda?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>731, "categories"=>[{"alias"=>"beer_and_wine", "title"=>"Beer, Wine & Spirits"}, {"alias"=>"distilleries", "title"=>"Distilleries"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.78758, "longitude"=>-122.30918}, "transactions"=>[], "price"=>"$$", "location"=>{"address1"=>"2601 Monarch St", "address2"=>"", "address3"=>"", "city"=>"Alameda", "zip_code"=>"94501", "country"=>"US", "state"=>"CA", "display_address"=>["2601 Monarch St", "Alameda, CA 94501"]}, "phone"=>"+15107691601", "display_phone"=>"(510) 769-1601", "distance"=>11567.821174057999}],

  milkshakes: [{"id"=>"shakedown-san-francisco", "name"=>"ShakeDown", "image_url"=>"https://s3-media1.fl.yelpcdn.com/bphoto/ueFUwCo_D8ew2AYpGKFuVQ/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/shakedown-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>421, "categories"=>[{"alias"=>"icecream", "title"=>"Ice Cream & Frozen Yogurt"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7861988544464, "longitude"=>-122.41704672575}, "transactions"=>["pickup"], "price"=>"$", "location"=>{"address1"=>"835 Geary St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94109", "country"=>"US", "state"=>"CA", "display_address"=>["835 Geary St", "San Francisco, CA 94109"]}, "phone"=>"+14153747523", "display_phone"=>"(415) 374-7523", "distance"=>3290.8138374799996}, {"id"=>"joes-ice-cream-san-francisco", "name"=>"Joe's Ice Cream", "image_url"=>"https://s3-media3.fl.yelpcdn.com/bphoto/n7SPhlhOlKGK4ABYuADAaw/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/joes-ice-cream-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>744, "categories"=>[{"alias"=>"icecream", "title"=>"Ice Cream & Frozen Yogurt"}, {"alias"=>"burgers", "title"=>"Burgers"}, {"alias"=>"hotdog", "title"=>"Hot Dogs"}], "rating"=>4.0, "coordinates"=>{"latitude"=>37.7807693481445, "longitude"=>-122.47777557373}, "transactions"=>[], "price"=>"$", "location"=>{"address1"=>"5420 Geary Blvd", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94121", "country"=>"US", "state"=>"CA", "display_address"=>["5420 Geary Blvd", "San Francisco, CA 94121"]}, "phone"=>"+14157511950", "display_phone"=>"(415) 751-1950", "distance"=>4253.911773231999}, {"id"=>"the-ice-cream-bar-san-francisco", "name"=>"The Ice Cream Bar", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/xiIXT6OhfFV9APb_ZOBBBg/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/the-ice-cream-bar-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>1084, "categories"=>[{"alias"=>"icecream", "title"=>"Ice Cream & Frozen Yogurt"}], "rating"=>4.0, "coordinates"=>{"latitude"=>37.7664906531572, "longitude"=>-122.4501619488}, "transactions"=>["pickup"], "price"=>"$$", "location"=>{"address1"=>"815 Cole St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94117", "country"=>"US", "state"=>"CA", "display_address"=>["815 Cole St", "San Francisco, CA 94117"]}, "phone"=>"+14157424932", "display_phone"=>"(415) 742-4932", "distance"=>1353.3684540683998}, {"id"=>"mitchells-ice-cream-san-francisco", "name"=>"Mitchell's Ice Cream", "image_url"=>"https://s3-media2.fl.yelpcdn.com/bphoto/ttfrmolywd0rLpcYJmf7Uw/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/mitchells-ice-cream-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>3400, "categories"=>[{"alias"=>"icecream", "title"=>"Ice Cream & Frozen Yogurt"}, {"alias"=>"bakeries", "title"=>"Bakeries"}, {"alias"=>"customcakes", "title"=>"Custom Cakes"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7442315, "longitude"=>-122.422816}, "transactions"=>[], "price"=>"$", "location"=>{"address1"=>"688 San Jose Ave", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94110", "country"=>"US", "state"=>"CA", "display_address"=>["688 San Jose Ave", "San Francisco, CA 94110"]}, "phone"=>"+14156482300", "display_phone"=>"(415) 648-2300", "distance"=>2207.071567694}, {"id"=>"miyako-old-fashioned-ice-cream-san-francisco", "name"=>"Miyako Old Fashioned Ice Cream", "image_url"=>"https://s3-media4.fl.yelpcdn.com/bphoto/HK-rJYg1j-JqsLw7KEVq9g/o.jpg", "is_closed"=>false, "url"=>"https://www.yelp.com/biz/miyako-old-fashioned-ice-cream-san-francisco?adjust_creative=M9gqzdwf1dF33p7XhqC-rQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=M9gqzdwf1dF33p7XhqC-rQ", "review_count"=>246, "categories"=>[{"alias"=>"icecream", "title"=>"Ice Cream & Frozen Yogurt"}, {"alias"=>"delis", "title"=>"Delis"}, {"alias"=>"sandwiches", "title"=>"Sandwiches"}], "rating"=>4.5, "coordinates"=>{"latitude"=>37.7829835563898, "longitude"=>-122.432590126991}, "transactions"=>[], "price"=>"$", "location"=>{"address1"=>"1470 Fillmore St", "address2"=>"", "address3"=>"", "city"=>"San Francisco", "zip_code"=>"94118", "country"=>"US", "state"=>"CA", "display_address"=>["1470 Fillmore St", "San Francisco, CA 94118"]}, "phone"=>"+14159315260", "display_phone"=>"(415) 931-5260", "distance"=>2491.308048606}]
}

all_businesses_by_category.each do |category, biz_arr|
  biz_arr.each do |biz|
    Business.create({
      name: biz["name"],
      user_id: User.find_by_l_name(all_last_names.sample).id,
      address1: biz["location"]["display_address"].first,
      address2: biz["location"]["display_address"].last,
      phone: biz["display_phone"],
      lat: biz["coordinates"]["latitude"],
      lng: biz["coordinates"]["longitude"],
      price: biz["price"],
      image_url: biz["image_url"]
    })

    BusinessesCategory.create({
      business_id: Business.last.id,
      category_id: Category.find_by_name(all_categories[category]).id
    })
  end
end
