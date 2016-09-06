require 'rails_helper'

RSpec.describe Category, type: :model do
  let(:category) { create :category }

  context 'when name is not present' do
    it'category is invalid' do
      category.name = ''
      expect(category).to_not be_valid
    end
  end

  context 'when name is too long' do
    it 'category is invalid' do
      category.name = 'a' * 101
      expect(category).to_not be_valid
    end
  end
end
