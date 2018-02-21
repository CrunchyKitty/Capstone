class AddNannyAndParentToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :parent, :boolean, default: false
    add_column :users, :nanny, :boolean, default: false
  end
end
