require 'sinatra'
require 'net/http'
require 'data_mapper'

require_relative './lib/models/tweet'
require_relative './lib/data_mapper_setup'

# set :public_folder, Proc.new {File.join(root, "public")}

get '/' do
  erb :index
end

post '/new' do
  tweet = Tweet.create(:body => params[:body])
  p tweet
end