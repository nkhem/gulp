# == Schema Information
#
# Table name: businesses_categories
#
#  id          :integer          not null, primary key
#  business_id :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class BusinessesCategory < ApplicationRecord
  validates :business_id, :category_id, presence: true
  
  belongs_to :category
  belongs_to :business
end
