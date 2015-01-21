require_relative './models/tweet'

env = ENV["RACK_ENV"] || "development"

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/themeparser_#{env}")


DataMapper.finalize