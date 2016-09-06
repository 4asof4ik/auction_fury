class RemoveRolesUsersJoin < ActiveRecord::Migration[5.0]
  def up
    drop_table :roles_users if table_exists? :roles_users
  end
  def down
    #Migration down is forbidden
  end
end
