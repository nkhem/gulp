class AddUniquenessContraintToBusinessesOnName < ActiveRecord::Migration[5.0]
  def change
    add_index :businesses, [:name, :address1, :address2], unique: true
  end
end
