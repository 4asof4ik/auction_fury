require 'rails_helper'

RSpec.describe Api::V1::AuctionsController, type: :controller do

  render_views

  let!(:auctions) do
    users.map { |user| FactoryGirl.create(:auction, user: user) }
  end

  let!(:users) do
    FactoryGirl.create_list(:user, 2)
    User.all
  end

  let(:current_user) { User.first }

  let(:auction_params) do
    { name: 'Auction',
      start: Time.current.change( usec: 0) + 1.minute,
      finish: 3.days.from_now.change( usec: 0),
      description: 'a' * 11 }
  end

  let(:wrong_auction_params) do
    { name: '',
      start: 3.days.from_now.change( usec: 0),
      finish: Time.current.change( usec: 0),
      description: "" }
  end

  before do
    allow(controller).to receive(:authenticate_request!)
    allow(controller).to receive(:current_user) { current_user }
  end

  describe 'GET #index' do
    it "returns all auctions" do
        get :index, format: :json
        response_auctions = JSON.parse(response.body)['auctions']
        expect(response_auctions.count).to be_eql Auction.all.count
    end
  end

  describe 'POST #create' do
    it 'return status 422 with ivalid data' do
      put :create, params: { auction: wrong_auction_params }, format: :json
      expect(response).to have_http_status(422)
    end

    it 'returns 201 status code' do
      post :create, params: { auction: auction_params }, format: :json
      expect(response).to have_http_status(201)
    end

    it 'return new auction', timecop: :freeze do
      post :create, params: { auction: auction_params }, format: :json
      responce_auction = JSON.parse(response.body)['created']
      new_auction = responce_auction.extract!('name','start','finish','description')
      expect(new_auction).to be_eql JSON.parse(auction_params.stringify_keys.to_json)
    end
  end

  describe 'PUT #update' do
    it 'returns status 404 with invalid data' do
      put :update, params: { id: current_user.auctions.first.id,
                             auction: wrong_auction_params }, format: :json
      expect(response).to have_http_status(404)
    end

    it 'returns 200 status code' do
      put :update, params: { id: current_user.auctions.first.id,
                             auction: auction_params  }, format: :json
      expect(response). to have_http_status(200)
    end

    it 'returns updated auction', timecop: :freeze do
      put :update, params: { id: current_user.auctions.first.id,
                             auction: auction_params }, format: :json
      responce_auction = JSON.parse(response.body)['updated']
      updated_auction = responce_auction.extract!('name','start','finish','description')
      expect(updated_auction).to be_eql JSON.parse(auction_params.stringify_keys.to_json)
    end
  end

  describe 'DELETE #destroy' do
    it 'returns 200 status code' do
      delete :destroy, params: { id: current_user.auctions.first.id },
                                 format: :json
      expect(response). to have_http_status(200)
    end
  end
end
