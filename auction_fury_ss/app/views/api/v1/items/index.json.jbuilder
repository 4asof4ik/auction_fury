json.items @items do |item|
  json.(item, :id, :name, :description, :price, :public, :user_id, :category_id, :pictures_abs_url)
end