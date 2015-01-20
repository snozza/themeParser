require_relative '../interface'
require 'rack/test'
require 'json'

describe 'server routes' do

  include Rack::Test::Methods

  def app
    Sinatra::Application
  end

  context 'upon a get request to the root' do

    it 'returns an ok status' do
      get 'http://localhost:3000'
      expect(last_response).to be_ok
    end

  end
end