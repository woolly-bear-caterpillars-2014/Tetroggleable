require 'rails_helper'

describe GamesController do 
	let!(:game) { Game.create(score: 10, scrabble_score: 150, level: 2, lines: 5, user_id: 1) }

	let!(:user) { User.create!(username: "stephen", email:"stephen@gmail.com", password:"password") }

	describe "GET #index" do 
		it "assigns all games as @games" do
			get :index
			expect(assigns(:games)).to eq(Game.all) 
		end
	end
end