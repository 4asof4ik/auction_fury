require 'rails_helper'

RSpec.describe UserPolicy do
  subject { UserPolicy }

  let!(:user1) { create :user }
  let!(:user2) { create :user }
  let!(:user3) { create :user }
  let!(:role1) { create :role, name: 'admin' }
  let!(:assignment) { user3.assignments.create(role: role1).update(approved: true) }

  let(:current_user) { user1 }
  let(:other_user) { user2 }
  let(:admin) { user3 }

  permissions :index? do

    it 'denies access if not an admin' do
      expect(UserPolicy).not_to permit(current_user)
      expect(UserPolicy).not_to permit(other_user)
    end

    it 'permit access if an admin' do
      expect(UserPolicy).to permit(admin)
    end
  end

  permissions :show? do

    it "permit access if user is current user" do
      expect(UserPolicy).to permit(current_user, current_user)
    end
    
    it "permit access if user is an admin" do
      expect(UserPolicy).to permit(admin)
    end

    it "denies access if not a current user" do
      expect(UserPolicy).not_to permit(other_user)
    end
  end

  permissions :update? do

    it "permit access if user is current_user" do
      expect(UserPolicy).to permit(current_user, current_user)
    end
    
    it "permit access if user is an admin" do
      expect(UserPolicy).to permit(admin)
    end

    it 'denies access if not a current user' do
      expect(UserPolicy).not_to permit(other_user)
    end
  end

  permissions :delete? do
    it "permit access if user is an admin" do
      expect(UserPolicy).to permit(admin)
    end

    it 'denies access if other user' do
      expect(UserPolicy).not_to permit(other_user)
      expect(UserPolicy).not_to permit(current_user)
    end
  end
end
