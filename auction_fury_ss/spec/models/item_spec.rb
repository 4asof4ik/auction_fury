require 'rails_helper'

RSpec.describe Item, type: :model do

  let(:user) { FactoryGirl.create(:user) }
  let(:category) { FactoryGirl.create(:category, name: 'test category') }
  let(:item) { FactoryGirl.create(:item, user: user, category: category) }

  describe 'attributes' do
    it 'responds to name attribute' do
      expect(item).to respond_to(:name)
    end

    it 'responds to description attribute' do
      expect(item).to respond_to(:description)
    end

    it 'responds to price attribute' do
      expect(item).to respond_to(:price)
    end

    it 'responds to user_id attribute' do
      expect(item).to respond_to(:user_id)
    end
  end

  describe 'name' do
    it 'is not valid when name is empty' do
      item.name = ' '
      expect(item).to_not be_valid
    end

    it 'is correct' do
      item.name = 'a' * 79
      expect(item).to be_valid
    end
  end

  describe 'description' do
    it 'is not valid when description is empty' do
      item.description = ' '
      expect(item).to_not be_valid
    end

    it 'is correct' do
      item.description = 'a' * 81
      expect(item).to be_valid
    end
  end

  describe 'price' do
    it 'is not valid when price is empty' do
      item.price = nil
      expect(item).to_not be_valid
    end

    it 'is not valid when price has incorrect format' do
      item.price = "some string"
      expect(item).to_not be_valid
    end
  end
end
