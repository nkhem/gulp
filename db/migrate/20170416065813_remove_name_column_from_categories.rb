class RemoveNameColumnFromCategories < ActiveRecord::Migration[5.0]
  def change
    rename_column :categories, :name, :title
    add_column :categories, :alias, :string
  end
end
