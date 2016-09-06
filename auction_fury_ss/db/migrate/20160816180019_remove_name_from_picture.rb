class RemoveNameFromPicture < ActiveRecord::Migration[5.0]
  def up
    remove_column :pictures, :name, :string
  end

  def down
    add_column :pictures, :name, :string
  end
end
