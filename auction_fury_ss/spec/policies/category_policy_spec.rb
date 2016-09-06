require 'rails_helper'

RSpec.describe CategoryPolicy do
  subject { CategoryPolicy }

  let!(:user1) { create :user }
  let!(:user2) { create :user }
  let!(:user3) { create :user }
  let!(:role1) { create :role, name: 'admin' }
  let!(:assignment1) { user3.assignments.create(role: role1).update(approved: true) }

  let(:other_user) { user2 }
  let(:admin) { user3 }

  permissions :create? do 

    it 'denies access if not an moderator or admin' do
      expect(CategoryPolicy).not_to permit(other_user)
    end

    it 'permit access if an admin or moderator' do
      expect(CategoryPolicy).to permit(admin)
    end
  end

  permissions :update? do 

    it 'denies access if not an moderator or admin' do
      expect(CategoryPolicy).not_to permit(other_user)
    end

    it 'permit access if an admin or moderator' do
      expect(CategoryPolicy).to permit(admin)
    end
  end

  permissions :destroy? do 

    it 'denies access if not an moderator or admin' do
      expect(CategoryPolicy).not_to permit(other_user)
    end

    it 'permit access if an admin or moderator' do
      expect(CategoryPolicy).to permit(admin)
    end
  end
end
