require 'rails_helper'
RSpec.describe Api::V1::CategoriesController, type: :controller do
  let(:category) { create :category }
  let(:category2) { create :category }

  describe 'GET index' do
    it 'assigns @categories' do
      get(:index, format: :json)
      expect(assigns(:categories)).to eq([category, category2])
    end
  end

  describe 'POST create' do
    it 'returns a 201 status code for valid request' do
      post :create, params: { category:  {
        name: 'Category',
        description: '',
        image: ''
      } }, format: :json
      expect(response).to have_http_status(201)
    end

    context 'category with a specified name already exists in database' do
      it 'returns a 422 status code' do
        post :create, params: { category:  {
          name: category.name,
          description: '',
          image: ''
        } }, format: :json
        expect(response).to have_http_status(422)
      end
    end

  end

  describe 'PUT update' do
    it 'returns a 200 status code for valid request' do
      put :update, params: { id: category.id, category:  {
        name: 'Category',
        description: '',
        image: ''
      } }, format: :json
      expect(response).to have_http_status(200)
    end

    context 'category with a specified name  already exists in database' do
      it 'returns a 422 status code for update action' do
        put :update, params: { id: category2.id, category:  {
          name: category.name,
          description: '',
          image: ''
        } }, format: :json
        expect(response).to have_http_status(422)
      end
    end

  end

  describe 'DELETE destroy' do
    it 'returns a 200 status code for valid request' do
      delete :destroy, params: { id: category.id }, format: :json
      expect(response).to have_http_status(200)
    end
  end

end
