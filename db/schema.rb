# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170504063732) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string   "title",        null: false
    t.integer  "user_id",      null: false
    t.string   "phone",        null: false
    t.float    "lat",          null: false
    t.float    "lng",          null: false
    t.string   "price",        null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "image_url",    null: false
    t.string   "address1",     null: false
    t.string   "address2",     null: false
    t.string   "alias"
    t.float    "rating"
    t.integer  "review_count"
    t.string   "yelp_url"
    t.index ["title", "address1", "address2"], name: "index_businesses_on_title_and_address1_and_address2", unique: true, using: :btree
    t.index ["user_id"], name: "index_businesses_on_user_id", using: :btree
  end

  create_table "businesses_categories", force: :cascade do |t|
    t.integer  "business_id", null: false
    t.integer  "category_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["business_id"], name: "index_businesses_categories_on_business_id", using: :btree
    t.index ["category_id"], name: "index_businesses_categories_on_category_id", using: :btree
  end

  create_table "categories", force: :cascade do |t|
    t.string   "title",      null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "alias"
    t.index ["alias"], name: "index_categories_on_alias", using: :btree
  end

  create_table "photos", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "review_id",  null: false
    t.string   "url",        null: false
    t.string   "caption",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_photos_on_review_id", using: :btree
    t.index ["user_id"], name: "index_photos_on_user_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "business_id", null: false
    t.integer  "user_id",     null: false
    t.text     "content",     null: false
    t.integer  "rating",      null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["business_id"], name: "index_reviews_on_business_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "f_name",          null: false
    t.string   "l_name",          null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "username"
    t.index ["email"], name: "index_users_on_email", using: :btree
  end

end
