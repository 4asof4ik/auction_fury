class AddAuctionIdToItems < ActiveRecord::Migration[5.0]
  def change
    add_reference :items, :auction
  end
end
