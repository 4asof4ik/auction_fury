require 'rails_helper'

RSpec.describe Api::V1::ItemsController, type: :controller do

  render_views

  let!(:users) do
    FactoryGirl.create_list(:user, 20)
    User.all
  end

  let(:current_user) { User.first }

  let(:category) { create :category, name: 'itemCategory'}

  let!(:items) do
    users.map do |user|
      item = FactoryGirl.create(:item, user: user)
      item.pictures.create
    end
  end

  let(:item_params) do
    {
      name: 'test',
      description: 'test'*3,
      price: 21.21,
      public: true,
      user_id: 281,
      category_id: category.id
    }
  end


  before do
    allow(controller).to receive(:authenticate_request!)
    allow(controller).to receive(:current_user) { current_user }
  end

  describe 'index' do
    let(:public_items) do
      JSON.parse(Item.public_items.to_json).map do |item|
        extract_items_attr(item)
      end
    end

    let(:public_items_pictures_url) do
      pictures = Item.public_items.map do |item|
        { pictures_abs_url: item.pictures_abs_url }
      end
      JSON.parse(pictures.to_json)
    end

    it 'returns all public items' do
      get :index, format: :json

      response_items = JSON.parse(response.body)['items'].map! do |item|
        extract_items_attr(item)
      end

      expect(response_items ).to be_eql public_items
    end

    it 'returns all public items\'s pictures urls' do
      get :index, format: :json

      response_items = JSON.parse(response.body)['items'].map! do |item|
        item.extract!('pictures_abs_url')
      end

      expect(response_items).to be_eql public_items_pictures_url
    end
  end

  describe 'personal' do
    let(:personal_items) do
      JSON.parse(current_user.items.to_json).map! do |item|
        extract_items_attr(item)
      end
    end

    let(:personal_items_pictures_urls) do
      pictures = current_user.items.map do |item|
        { pictures_abs_url: item.pictures_abs_url }
      end
      JSON.parse(pictures.to_json)
    end

    it 'returns user\'s items' do
      get :personal, format: :json

      response_items = JSON.parse(response.body)['items'].map! do |item|
        extract_items_attr(item)
      end

      expect(response_items).to be_eql personal_items
    end

    it 'returns user item\'s pictures urls' do
      get :personal, format: :json

      response_items = JSON.parse(response.body)['items'].map! do |item|
        item.extract!('pictures_abs_url')
      end

      expect(response_items).to be_eql personal_items_pictures_urls
    end
  end

  describe 'create' do
    it 'creates new item' do
      post :create, params: {item: item_params}, format: :json

      response_item = extract_items_attr(JSON.parse(response.body))

      expect(Item.exists?(response_item['id'])).to be true
    end

    it 'returns status :created' do
      post :create, params: {item: item_params}, format: :json

      expect(response).to have_http_status(:created)
    end

    it 'returns new item' do
      post :create, params: {item: item_params}, format: :json

      response_item = JSON.parse(response.body).extract!('name',
                                                         'description',
                                                         'price',
                                                         'public',
                                                         'user_id',
                                                         'category_id')

      expect(response_item).to be_eql item_params.stringify_keys
    end
  end

  describe 'update' do
    let(:wrong_id) { Item.last.id + 1 }

    let(:good_id) { current_user.items.first.id }

    it 'returns head :not_found' do
      put :update, params: {id: wrong_id}, format: :json

      expect(response).to have_http_status(:not_found)
    end

    it 'returns updated item' do
      put :update, params: { id: good_id, item: item_params }, format: :json

      expect(response).to have_http_status(:ok)
    end

    it 'returns updated item' do
      put :update, params: { id: good_id, item: item_params }, format: :json

      response_item = JSON.parse(response.body).extract!('name',
                                                         'description',
                                                         'price',
                                                         'public',
                                                         'user_id',
                                                         'category_id')

      expect(response_item).to be_eql item_params.stringify_keys
    end
  end

  describe 'destroy' do

    it 'returns status :ok' do
      delete :destroy,
              params: { id: current_user.items.first.id },
              format: :json

      expect(response). to have_http_status(:ok)
    end
  end

  def extract_items_attr(data)
    data.extract!('id',
                  'name',
                  'description',
                  'price',
                  'public',
                  'user_id',
                  'category_id')
  end
end
