require 'dm-timestamps'

class Tweet

  include DataMapper::Resource

  property :id, Serial
  property :body, Text, :required => true
  property :created_on, DateTime

end