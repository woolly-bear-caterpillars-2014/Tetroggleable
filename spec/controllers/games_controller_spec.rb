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
		it "assigns request game as @game" do 
			get :show, id: game
			expect(assigns(:game)).to eq(game)
		end
	end

	describe "GET #new" do 
		it "initializes instance of a game" do 
			get :new
			expect(assigns(:game)).to be_a Game
		end
	end

	describe "POST #create" do 
		context "When valid params are pass" do 
			it "has a 200 status code" do 
				xhr :post, :create, game: FactoryGirl.attributes_for(:game)
				expect(response.status).to eq(200)
			end
		end
	end
end