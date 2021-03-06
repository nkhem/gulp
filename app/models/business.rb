# == Schema Information
#
# Table name: businesses
#
#  id         :integer          not null, primary key
#  title      :string           not null
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
#  alias      :string
#

class Business < ApplicationRecord
  validates :title, :alias, :user, :address1, :address2, :phone, :lat, :lng, :image_url, :rating, :review_count, presence: true
  validates :title, uniqueness: true
  validates :price, inclusion: { in: ["$", "$$", "$$$", "$$$$"] }
  validates :rating, inclusion: { in: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] }

  belongs_to :user
  has_many :reviews
  has_many :businesses_categories
  has_many :categories,
    through: :businesses_categories,
    source: :category
end
