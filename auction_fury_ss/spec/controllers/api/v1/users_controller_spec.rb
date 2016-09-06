require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do

  render_views

  let!(:user1) {create :user}
  let!(:user2) {create :user}

  let!(:users) do
    FactoryGirl.create_list(:user, 20)
  end


  let(:current_user) { User.first }

  before do
    allow(controller).to receive(:authenticate_request!)
    allow(controller).to receive(:current_user) { current_user }
  end

  describe 'UsersController' do

    describe 'get show' do

      it 'returns proper user' do
        #
        # skip "run only isolated"
        get :show, params: { id: users.first.id }, format: :json
        response_user = JSON.parse(response.body)['user']
        expect(response_user['email']).to be_eql users.first.email
      end

      it "is a sucess response" do
        expect(response).to have_http_status(:ok)
      end
    end

    describe 'GET index' do

      it "returns all users" do
        get :index, format: :json
        response_users = JSON.parse(response.body)['users']
        expect(response_users.count).to be_eql User.all.count
      end

      it "is a success response" do
        expect(response).to have_http_status(:ok)
      end

    end

    describe 'put update' do
      it 'return a 200 status for valid request'do
        put :update, params: {id: user1.id,user:{
            email: 'validemail@expmle.com',
            firstname: 'new_first_name',
            lastname: 'new_last_name'},
            profile: {city: 'lviv'}}, format: :json
        expect(response).to have_http_status(201)
      end

      context 'user with specified email already exist in db' do
        it 'returns a 422 status code for update action' do
          put :update, params: {id: user2.id, user:{
              email: user1.email,
              firstname: 'firstname',
              lastname: 'lastname'},
              profile: {city: 'lviv'}}, format: :json

          expect(response).to have_http_status(422)
        end
      end

    end

  end

end
