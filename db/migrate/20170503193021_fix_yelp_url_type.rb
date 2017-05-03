class FixYelpUrlType < ActiveRecord::Migration[5.0]
  def change
    change_column :businesses, :yelp_url, :string
  end
end
