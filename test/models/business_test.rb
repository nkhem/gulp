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

require 'test_helper'

class BusinessTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
