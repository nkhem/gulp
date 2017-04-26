# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  alias      :string
#

class Category < ApplicationRecord
  validates :alias, :title, presence: true, uniqueness: true

  has_many :businesses,
    through: :businesses_categories,
    source: :business
end
