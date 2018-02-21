class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.integer :parent_id
      t.integer :nanny_id
      t.string :status
      t.string :start_time
      t.string :end_time
      t.string :location
      t.integer :number_of_children
      t.integer :pay_rate

      t.timestamps
    end
  end
end
