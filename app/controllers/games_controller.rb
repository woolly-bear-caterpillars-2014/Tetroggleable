class GamesController < ApplicationController
	include UsersHelper

	def index
	end

	def show

		if current_user
			@game = Game.find(params[:id])
			@user = User.find(session[:user_id])
		else
			@game = Game.new
			flash.now[:notice] = "You are not logged in"
		end

	end

	def new
		@game = Game.new
	end

	def create
		if request.xhr?
			if current_user
				p params
				@game = current_user.games.create(game_params)
				render :json => @game
			else
				redirect_to signup_path
			end
		else
			render :new
		end
	end

	private

	def game_params
		params.require(:game).permit(:score, :scrabble_score, :level, :lines, :user_id)
	end
end
