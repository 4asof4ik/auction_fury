class AuctionPolicy < ApplicationPolicy
  attr_reader :model, :current_user

  def initialize(current_user, model)
    @current_user = current_user
    @auction = model
  end

  def show?
    buyer? 
  end

  def create?
    buyer? 
  end

  def update?
    buyer?
  end
end
