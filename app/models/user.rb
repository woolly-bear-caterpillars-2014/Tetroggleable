class User < ActiveRecord::Base
	has_many :games

	validates :username, presence: true
	validates :email, presence: true
	validates_uniqueness_of :email

end
