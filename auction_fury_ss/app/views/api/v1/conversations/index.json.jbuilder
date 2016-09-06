json.conversations @conversations.each do | c |
  json.id c.id
  json.name c.name
  json.users c.users.each do | u |
    json.id u.id
    json.firstname u.firstname
    json.lastname u.lastname
    json.email u.email
  end
  json.last_message do
    if c.messages.last
      json.id c.messages.last.id
      json.content c.messages.last.content
      json.sender do
        json.id c.messages.last.user.id
        json.firstname c.messages.last.user.firstname
        json.lastname c.messages.last.user.lastname
        json.email c.messages.last.user.email
      end
    end
  end
end
