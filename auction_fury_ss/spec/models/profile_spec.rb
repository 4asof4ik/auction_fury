require 'rails_helper'

RSpec.describe Profile, type: :model do

  let(:user){FactoryGirl.create(:user)}
  let(:profile){FactoryGirl.create(:profile, user:user)}

  describe 'attributes' do
    it 'responds to city attribute' do
      expect(profile).to respond_to(:city)
    end

    it 'responds to country attribute' do
      expect(profile).to respond_to(:country)
    end

    it 'responds to state attribute' do
      expect(profile).to respond_to(:state)
    end

    it 'responds to street attribute' do
      expect(profile).to respond_to(:street)
    end

    it 'has proper user_id attribute' do
      expect(user.id).to be_eql(profile.user_id)
    end
  end

end
