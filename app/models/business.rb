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
#

class Business < ApplicationRecord
end
