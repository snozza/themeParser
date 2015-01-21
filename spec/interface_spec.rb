require_relative '../interface'
require 'rack/test'
require 'json'

describe 'server routes' do

  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  context 'upon a request' do

    it 'returns an ok status on get request to root' do
      get 'http://localhost:3000'
      expect(last_response).to be_ok
    end

    it 'returns an ok status on post request to new' do
      post 'http://localhost:3000/new'
      expect(last_response).to be_ok
    end

  end

  context 'upon a request to an unknown route' do

    it 'returns an error status' do
      get 'http://localhost:3000/example'
      expect(last_response).to_not be_ok
    end

  end
end