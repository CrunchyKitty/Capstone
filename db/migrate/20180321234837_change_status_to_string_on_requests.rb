class ChangeStatusToStringOnRequests < ActiveRecord::Migration[5.1]
  def change
    change_column :requests, :status, :string
  end
end
