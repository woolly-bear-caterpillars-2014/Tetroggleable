class Game < ActiveRecord::Base
	belongs_to :user
	validates :score, validates: true

	def self.average_score

	end
end
