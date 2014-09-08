class AddGuestToUsers < ActiveRecord::Migration
  def change
    add_column :users, :guests, :boolean
  end
end
