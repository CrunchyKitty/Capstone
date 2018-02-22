class RenamePasswordDigestToPasswordConfirmation < ActiveRecord::Migration[5.1]
  def change
    rename_column :users, :password_digest, :password_confirmation
  end
end
