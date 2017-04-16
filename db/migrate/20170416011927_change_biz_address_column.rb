class ChangeBizAddressColumn < ActiveRecord::Migration[5.0]
  def change
    remove_column :businesses, :street_address
    remove_column :businesses, :city
    remove_column :businesses, :state
    remove_column :businesses, :zip

    add_column :businesses, :address1, :string
    add_column :businesses, :address2, :string
  end
end
