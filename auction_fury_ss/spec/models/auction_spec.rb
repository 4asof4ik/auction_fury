require 'rails_helper'

RSpec.describe Auction, type: :model do
  let(:user) { FactoryGirl.create(:user) }
  let(:auction) { FactoryGirl.create(:auction, user: user) }

  describe 'states' do
    it 'is in state draft by default' do
      expect(auction).to have_state(:draft)
    end

    it 'can transition from state draft to state production' do
      expect(auction).to allow_transition_to(:production)
    end

     it 'can not transition from state draft to state closed' do
      expect(auction).to_not allow_transition_to(:closed)
    end

    it 'can transition from state production to state closed' do
      auction.aasm_state = 'production'
      expect(auction).to allow_transition_to(:closed)
    end

    it 'can not transition from state production to state draft' do
      auction.aasm_state = 'production'
      expect(auction).to_not allow_transition_to(:draft)
    end

    it 'can not transition from state closed to state draft' do
      auction.aasm_state = 'closed'
      expect(auction).to_not allow_transition_to(:draft)
    end

     it 'can not transition from state closed to state production' do
      auction.aasm_state = 'closed'
      expect(auction).to_not allow_transition_to(:production)
    end
  end

  describe 'attributes' do
    it 'responds to name attribute' do
      expect(auction).to respond_to(:name)
    end

    it 'responds to start attribute' do
      expect(auction).to respond_to(:start)
    end

    it 'responds to price attribute' do
      expect(auction).to respond_to(:finish)
    end

    it 'responds to user_id attribute' do
      expect(auction).to respond_to(:user_id)
    end

    it 'responds to user_id attribute' do
      expect(auction).to respond_to(:description)
    end
  end

  describe 'name' do
    it 'is invalid without a name' do
      auction.name = ''
      expect(auction).to_not be_valid
    end

    it 'is valid when length is less than 50' do
      auction.name = 'a' * 49
      expect(auction).to be_valid
    end
  end

  describe 'start' do
    it 'is invalid without start time' do
      auction.start = ''
      expect(auction).to_not be_valid
    end

    it 'is invalid when start time before finish time' do
      auction.start = 3.days.from_now
      auction.finish = Time.current
      expect(auction).to_not be_valid
    end
  end

  describe 'finish' do
    it 'is invalid without finish time' do
      auction.finish = ''
      expect(auction).to_not be_valid
    end
  end

  describe 'description' do
    it 'is invalid when length is less then 10' do
      auction.description = ''
      expect(auction).to_not be_valid
    end
  end
end
