class AASMStateChangeWorkerCreate
  include Sidekiq::Worker

  def perform(auction_id)
    auction = Auction.find(auction_id)
    auction.create!
    auction.save!
  end
end
