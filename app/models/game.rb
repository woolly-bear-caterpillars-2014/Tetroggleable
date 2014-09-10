class Game < ActiveRecord::Base
	belongs_to :user

	validates :score, presence: true
	validates :scrabble_score, presence: true
	validates :level, presence: true
	validates :lines, presence: true

	def game_username
		self.user.username.to_s.upcase
	end
end
