require 'sinatra'
require 'net/http'
require 'data_mapper'
require 'date'

require_relative './lib/models/tweet'
require_relative './lib/data_mapper_setup'

# set :public_folder, Proc.new {File.join(root, "public")}

get '/' do
  erb :index
end

post '/new' do
  tweet = Tweet.create(:body => params[:body])
end

get '/check' do
  Tweet.all.to_json
  timeSearch = DateTime.new(Time.now.to_i - 500)
  p timeSearch
  p DateTime.now
  Tweet.all.to_json
end