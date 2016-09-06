if @message
  if (@message.persisted?)
   json.message @message
  else
    json.errors @message.errors
  end
end
