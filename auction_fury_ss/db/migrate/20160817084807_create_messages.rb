class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :content
      t.boolean :read
      t.references :user
      t.references :conversation
      t.timestamps
    end
  end
end