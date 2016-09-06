if ((@category.errors.empty?))
  json.category @category
else
  json.errors @category.errors
end
