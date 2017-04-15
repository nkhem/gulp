class CreateBusinesses < ActiveRecord::Migration[5.0]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
      t.string :street_address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :phone, null: false

      t.float :lat, null: false
      t.float :lng, null: false

      t.string :price, null: false

      t.timestamps null: false
    end

    add_index :businesses, :user_id

    create_table :reviews do |t|
      t.integer :business_id, null: false
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :content, null: false
      t.integer :rating, null: false
      t.timestamps
    end

    add_index :reviews, :business_id
    add_index :reviews, :user_id

    create_table :photos do |t|
      t.integer  :user_id, null: false
      t.integer  :review_id, null: false
      t.string   :url, null: false
      t.string   :caption, null: false

      t.timestamps
    end

    add_index :photos, :review_id
    add_index :photos, :user_id

    create_table :categories do |t|
      t.string :name, null: false

      t.timestamps
    end

    create_table :businesses_categories do |t|
      t.integer :business_id, null: false
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :businesses_categories, :business_id
    add_index :businesses_categories, :category_id
  end
end
