class AddAliasAndTitleColumnsToBiz < ActiveRecord::Migration[5.0]
  def change
    rename_column :businesses, :name, :title
    add_column :businesses, :alias, :string
  end
end
