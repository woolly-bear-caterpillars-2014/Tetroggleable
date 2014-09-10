module GamesHelper
	def game_stats
		render partial: 'games/score'
	end

	def self.high_scores
		render partial: 'games/high_scores'
	end
end
