require 'rails_helper'

RSpec.describe 'routes for items', type: :routing do

  it 'routes to #index' do
    expect(get('/api/v1/items')).to route_to('api/v1/items#index')
  end

  it 'routes to #personal' do
    expect(get('/api/v1/items/personal')).to route_to('api/v1/items#personal')
  end

  it 'routes to #create' do
    expect(post('/api/v1/items')).to route_to('api/v1/items#create')
  end

  it 'routes to #update' do
    expect(put('api/v1/items/1')).to route_to(
      controller: 'api/v1/items',
      action: 'update',
      id: '1')
  end

  it 'routes to #destroy' do
    expect(delete('/api/v1/items/1')).to route_to(
      controller: 'api/v1/items',
      action: 'destroy',
      id: '1'
    )
  end

end
