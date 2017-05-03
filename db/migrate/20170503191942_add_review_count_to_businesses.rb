class AddReviewCountToBusinesses < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :review_count, :integer
  end
end
