class AddCategoryIdToItems < ActiveRecord::Migration[5.0]
  def change
    add_reference :items, :category
  end
end
