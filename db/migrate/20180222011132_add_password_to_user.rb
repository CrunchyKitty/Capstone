class AddPasswordToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :password,
    :string
    add_column :users, :password_digest, :string
    remove_column :users, :status, :string
    remove_column :requests, :status, :string
    add_column :users, :status, :boolean
    add_column :requests, :status, :boolean
  end
end
