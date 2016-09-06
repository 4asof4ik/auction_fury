class ChangeColumnTypeInRolesToName < ActiveRecord::Migration[5.0]
  def up
    rename_column :roles, :type, :name
  end

  def down
    rename_column :roles, :name, :type
  end
end
