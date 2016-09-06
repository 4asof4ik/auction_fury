json.count Auction.all.length
json.auctions @auctions.each do | a |
  json.id a.id
  json.name a.name
  json.start a.start.strftime("%Y.%m.%d %I:%M%p")
  json.finish a.finish.strftime("%Y.%m.%d %I:%M%p")
  json.state a.aasm_state
  json.description a.description
end
