class AddIndexToCategoriesOnAlias < ActiveRecord::Migration[5.0]
  def change
    add_index :categories, :alias
  end
end
