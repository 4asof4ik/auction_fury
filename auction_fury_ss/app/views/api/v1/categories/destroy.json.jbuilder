if (@category.destroyed?)
  json.category @category
else
  json.errors @category.errors
end
