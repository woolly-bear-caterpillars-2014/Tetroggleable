require 'rails_helper'

describe Game do 
	let!(:game) { Game.create(score: 10, scrabble_score: 10, level: 4, lines: 3, user_id: 1) }

	context "score" do 
		it "should return score" do 
			expect(game.score).to eq(10)
		end
	end
end
