class CreateAssignments < ActiveRecord::Migration[5.0]
  def change
    create_table :assignments do |t|
      t.belongs_to :user
      t.belongs_to :role
      t.timestamps
    end
  end
end
