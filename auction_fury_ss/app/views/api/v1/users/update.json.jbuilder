if ((@user.errors.empty?))
  json.user do
    json.(@user, :id, :email, :firstname, :lastname)
    json.avatar_url @absolute_url
    json.profile @user.profile
  end
else
  json.errors @user.errors
end