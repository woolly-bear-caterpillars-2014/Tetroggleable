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

	describe "GET #show" do 
		it "assigns game to a current user" do 
			get :show, id: game
			controller.stub(:current_user).and_return(:game)
		end
	end

	describe "GET #new" do 
		it "initializes instance of a game" do 
			get :new
			expect(assigns(:game)).to be_a Game
		end
	end
end