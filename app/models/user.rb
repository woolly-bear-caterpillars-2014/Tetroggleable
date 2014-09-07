class User < ActiveRecord::Base
	has_many :games

	validates_presence_of :username, :email
	validates_uniqueness_of :email

end
