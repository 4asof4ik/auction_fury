class ApplicationPolicy
  attr_reader :model, :current_user

  def initialize(current_user, model)
    @current_user = current_user
    @user = model
  end
   
  def admin?
    current_user.roles.pluck(:name).include?('admin')
  end

  def buyer?
    current_user.roles.pluck(:name).include?('buyer')
  end

  def seller?
    current_user.roles.pluck(:name).include?('seller')
  end

  def current_user?
    @current_user = @user
  end

  def approved?
    current_user.assignments.pluck(:approved).include?(true)
  end

  def scope
    Pundit.policy_scope!(user, record.class)
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope
    end

  end
end
