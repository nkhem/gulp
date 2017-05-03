class AddYelpUrlToBiz < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :yelp_url, :integer
  end
end
