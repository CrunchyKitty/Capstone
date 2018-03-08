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

ActiveRecord::Schema.define(version: 20180225204143) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "requests", force: :cascade do |t|
    t.integer "parent_id"
    t.integer "nanny_id"
    t.string "start_time"
    t.string "end_time"
    t.string "location"
    t.integer "number_of_children"
    t.integer "pay_rate"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "status"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "gender"
    t.integer "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "parent", default: false
    t.boolean "nanny", default: false
    t.boolean "status"
    t.string "password_digest"
    t.string "city"
    t.string "state"
    t.integer "zip_code"
  end

end
