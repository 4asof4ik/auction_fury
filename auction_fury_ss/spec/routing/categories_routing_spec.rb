require 'rails_helper'

RSpec.describe 'routes for categories', type: :routing do
  it 'routes to #index' do
    expect(get('/api/v1/categories')).to route_to('api/v1/categories#index')
  end

  it 'routes to #create' do
    expect(post('/api/v1/categories')).to route_to('api/v1/categories#create')
  end

  it 'routes to #update' do
    expect(put('/api/v1/categories/12')).to route_to(
      controller: 'api/v1/categories',
      action: 'update',
      id: '12'
    )
  end

  it 'routes to #destroy' do
    expect(delete('/api/v1/categories/12')).to route_to(
      controller: 'api/v1/categories',
      action: 'destroy',
      id: '12'
    )
  end
end
