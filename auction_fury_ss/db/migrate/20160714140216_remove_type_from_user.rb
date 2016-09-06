class RemoveTypeFromUser < ActiveRecord::Migration[5.0]
  def up
    remove_column :users, :type
  end
end
