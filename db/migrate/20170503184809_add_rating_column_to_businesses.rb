class AddRatingColumnToBusinesses < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :rating, :float
  end
end
