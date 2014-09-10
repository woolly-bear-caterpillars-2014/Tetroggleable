class User < ActiveRecord::Base
  has_secure_password

  has_many :games

	validates_presence_of :username, :email, :password_digest, unless: :guest?
	validates_uniqueness_of :username, allow_blank: true
  validates_uniqueness_of :email
end
