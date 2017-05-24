class AddUniquenessIndexOnReviewsOnUserId < ActiveRecord::Migration[5.0]
  def change
    add_index :reviews, [ :business_id, :user_id ], unique: true
  end
end
