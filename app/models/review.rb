# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  user_id     :integer          not null
#  title       :string           not null
#  content     :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :title, :content, :rating, presence: true

  belongs_to :business
  belongs_to :user
  has_many :photos
end
