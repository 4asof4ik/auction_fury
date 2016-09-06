class ItemPolicy < ApplicationPolicy
  attr_reader :model, :current_user 

  def initialize(current_user , model)
    @current_user = current_user 
    @item = model
  end

  def show?
    seller?
  end

  def update?
    seller? 
  end
  
  def create?
    seller?
  end

  def destroy?
    seller?  || admin?
  end
end
