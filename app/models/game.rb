class Game < ActiveRecord::Base
	belongs_to :user
	

	def self.average_score

	end

	def self.display_game
		i = 0
		@user.games.each do |game|
			return game.score
		end
	end
end
