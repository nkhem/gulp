# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  phone      :string           not null
#  lat        :float            not null
#  lng        :float            not null
#  price      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  image_url  :string           not null
#  address1   :string           not null
#  address2   :string           not null
#

class Business < ApplicationRecord
  validates :title, :alias, :user, :address1, :address2, :phone, :lat, :lng, :image_url, presence: true
  validates :title, uniqueness: true
  validates :price, inclusion: { in: ["$", "$$", "$$$", "$$$$"] }

  belongs_to :user
  has_many :reviews
  has_many :businesses_categories
  has_many :categories,
    through: :businesses_categories,
    source: :category
end
