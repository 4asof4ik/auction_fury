class UserPolicy < ApplicationPolicy

  def index?
    admin?
  end

  def show?
    admin? || current_user?
  end

  def update?
   admin? || current_user?
  end

  def delete?
    admin?
  end
end
