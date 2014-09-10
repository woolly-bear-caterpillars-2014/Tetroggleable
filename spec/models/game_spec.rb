require 'rails_helper'

describe Game do 
	let!(:game) { Game.create(score: 10, scrabble_score: 10, level: 1, lines: 3, user_id: 1) }
	let!(:user) { User.create(username:"stephen", email:"stephen@gmail.com", password:"password")}

	context "score" do 
		it "should return score" do 
			expect(game.score).to eq(10)
		end
	end

	context "scrabble_score" do 
		it "should return scrabble score" do 
			expect(game.scrabble_score).to eq(10)
		end
	end

	context "level" do 
		it "should return level" do 
			expect(game.level).to eq(1)
		end
	end

	context "lines" do 
		it "should return lines" do 
			expect(game.lines).to eq(3)
		end
	end

	context "user" do 
		it "should return user rid" do 
			expect(game.user_id).to eq(1)
		end
	end

	context "validate presence" do 
		it { should validate_presence_of(:score) }
	end

	context "validate presence" do
		it { should validate_presence_of(:scrabble_score) }
	end
end






