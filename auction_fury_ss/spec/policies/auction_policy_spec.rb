require 'rails_helper'

RSpec.describe AuctionPolicy do
  subject { AuctionPolicy }

  let!(:user1) { create :user }
  let!(:user2) { create :user }
  let!(:user3) { create :user }
  let!(:role1) { create :role, name: 'buyer' }
  let!(:assignment1) { user1.assignments.create(role: role1).update(approved: true) }

  let(:buyer) { user1 }
  let(:other_user) { user2 }
    
   permissions :show? do

    it 'denies access if not a buyer' do
      expect(AuctionPolicy).not_to permit(other_user)
    end

    it 'permit access if current user is buyer' do
      expect(AuctionPolicy).to permit(buyer)
    end
  end

  permissions :create? do

    it 'denies access if not a buyer' do
      expect(AuctionPolicy).not_to permit(other_user)
    end

    it 'permit access if current user is buyer' do
      expect(AuctionPolicy).to permit(buyer)
    end
  end

  permissions :update? do

    it 'denies access if not a buyer' do
      expect(AuctionPolicy).not_to permit(other_user)
    end

    it 'permit access if current user is buyer' do
      expect(AuctionPolicy).to permit(buyer)
    end
  end
end
