json.current_page @users.current_page
json.total_entries @users.total_entries
json.users @users do |user|
  json.(user, :id, :email, :avatar, :firstname, :lastname)

  json.roles user.roles do |role|
    json.(role,  :name)
  end

end
