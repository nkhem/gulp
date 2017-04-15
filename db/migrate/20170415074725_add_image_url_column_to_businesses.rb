class AddImageUrlColumnToBusinesses < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :image_url, :string, null: false
  end
end
