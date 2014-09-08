class User < ActiveRecord::Base

  has_many :games

	validates_presence_of :username, :email, :password_digest, unless: :guest?
	validates_uniqueness_of :username, allow_blank: true

  require 'bcrypt'
  attr_reader :password
  include ActiveModel::SecurePassword::InstanceMethodsOnActivation

      
  def name
    guest ? "Guest" : username
  end

  def self.new_guest
    new { |u| u.guest = true }
  end

end
