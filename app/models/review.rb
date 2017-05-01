# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  user_id     :integer          not null
#  content     :text             not null
#  rating      :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :content, :rating, presence: true
  validates :rating, inclusion: { in: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5] }

  belongs_to :business
  belongs_to :user
  has_many :photos
end
