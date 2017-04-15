# == Schema Information
#
# Table name: businesses
#
#  id             :integer          not null, primary key
#  name           :string           not null
#  user_id        :integer          not null
#  street_address :string           not null
#  city           :string           not null
#  state          :string           not null
#  zip            :string           not null
#  phone          :string           not null
#  lat            :float            not null
#  lng            :float            not null
#  price          :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  image_url      :string           not null
#

class Business < ApplicationRecord
  validates :user, :name, :street_address, :city, :state, :zip, :price, :image_url, :lat, :lng, presence: true
  validates :price, inclusion: { in: ["$", "$$", "$$$", "$$$$"] }

  belongs_to :user
  has_many :reviews
  has_many :categories,
    through: :businesses_categories,
    source: :category
end
