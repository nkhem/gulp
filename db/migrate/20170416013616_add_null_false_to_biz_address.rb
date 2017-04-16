class AddNullFalseToBizAddress < ActiveRecord::Migration[5.0]
  def change
    change_column :businesses, :address1, :string, null: false
    change_column :businesses, :address2, :string, null: false
  end
end
