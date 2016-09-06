class CategoryPolicy < ApplicationPolicy
  attr_reader :model, :current_user

  def initialize(current_user, model)
    @current_user = current_user
    @category = model
  end

  def create?
    admin?
  end

  def update?
    admin?
  end

  def destroy?
    admin?
  end
end
