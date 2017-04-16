# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  review_id  :integer          not null
#  url        :string           not null
#  caption    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :url, :caption, presence: true

  belongs_to :user
  belongs_to :review
  has_one :business,
    through: :review,
    source: :business
end
