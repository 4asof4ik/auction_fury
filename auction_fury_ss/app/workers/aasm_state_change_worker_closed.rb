class AASMStateChangeWorkerClosed
  include Sidekiq::Worker

  def perform(auction_id)
    auction = Auction.find(auction_id)
    auction.closed!
    auction.save!
  end
end
