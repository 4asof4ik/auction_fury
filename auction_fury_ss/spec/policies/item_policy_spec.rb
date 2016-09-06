require 'rails_helper'

RSpec.describe ItemPolicy do
  subject { ItemPolicy }

  let!(:user1) { create :user }
  let!(:user2) { create :user }
  let!(:user3) { create :user }
  let!(:role1) { create :role, name: 'admin' }
  let!(:role2) { create :role, name: 'seller' }
  let!(:assignment1) { user3.assignments.create(role: role1).update(approved: true) }
  let!(:assignment2) { user1.assignments.create(role: role2).update(approved: true) }
  
  let(:seller) { user1 }
  let(:other_user) { user2 }
  let(:admin) { user3 }
  
  permissions :show? do

    it 'denies access if not a seller' do
      expect(ItemPolicy).not_to permit(other_user)
    end

    it 'permit access if current user is seller' do
      expect(ItemPolicy).to permit(seller)
    end
  end

  permissions :create? do

    it 'denies access if not a seller' do
      expect(ItemPolicy).not_to permit(other_user)
      expect(ItemPolicy).not_to permit(admin)
    end

    it 'permit access if seller' do
      expect(ItemPolicy).to permit(seller)
    end
  end

  permissions :update? do

    it 'denies access if not a seller' do
      expect(ItemPolicy).not_to permit(other_user)
      expect(ItemPolicy).not_to permit(admin)
    end

    it 'permit access if seller' do
      expect(ItemPolicy).to permit(seller)
    end
  end

  permissions :destroy? do
    it 'denies access if not a seller' do
      expect(ItemPolicy).not_to permit(other_user)
    end

    it 'permit access if seller' do
      expect(ItemPolicy).to permit(seller)
    end

    it 'permit access if admin' do
      expect(ItemPolicy).to permit(admin)
    end
  end
end 
