if (@category.persisted?)
  json.category @category
else
  json.errors @category.error
end
