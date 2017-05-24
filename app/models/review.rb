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
  validates :rating, inclusion: { in: [1, 2, 3, 4, 5] }
  validates :content, :rating, presence: true
  validates_uniqueness_of :business_id, :scope => :user_id

  belongs_to :business
  belongs_to :user
  has_many :photos
end
