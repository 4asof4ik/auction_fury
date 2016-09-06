json.conversation do
  if @conversation
    json.id @conversation.id
    json.name @conversation.name
    json.users @conversation.users.each do | u |
      json.id u.id
      json.firstname u.firstname
      json.lastname u.lastname
      json.email u.email
    end
    json.messages @conversation.messages.each do | m |
      json.id m.id
      json.content m.content
      json.read m.read
      json.sender do
        json.id m.user.id
        json.firstname m.user.firstname
        json.lastname m.user.lastname
        json.email m.user.email
      end
    end
  end
end
