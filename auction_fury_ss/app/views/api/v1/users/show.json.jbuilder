json.user do
  json.(@user, :id, :email, :firstname, :lastname)
  json.avatar_url @absolute_url
  json.profile @user.profile
  json.roles @user.roles do |role|
    json.(role, :id, :name)
  end
  json.assignments @user.assignments do |assignment|
    json.(assignment, :approved, :role_id)
  end
end