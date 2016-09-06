 require 'rails_helper'

 RSpec.describe 'routes for auctions', type: :routing do
   it 'routes to #index' do
     expect(get('/api/v1/auctions')).to route_to('api/v1/auctions#index')
   end

   it 'routes to #create' do
     expect(post('/api/v1/auctions')).to route_to('api/v1/auctions#create')
   end

   it 'routes to #show' do
     expect(get('/api/v1/auctions/1')).to route_to(
       controller: 'api/v1/auctions',
       action: 'show',
       id: '1'
     )
   end

   it 'routes to #update' do
     expect(put('/api/v1/auctions/1')).to route_to(
       controller: 'api/v1/auctions',
       action: 'update',
       id: '1'
     )
   end

   it 'routes to #destroy' do
     expect(delete('/api/v1/auctions/1')).to route_to(
       controller: 'api/v1/auctions',
       action: 'destroy',
       id: '1'
     )
   end
 end
