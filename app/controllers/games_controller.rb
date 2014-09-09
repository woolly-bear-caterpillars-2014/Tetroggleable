class GamesController < ApplicationController
	include UsersHelper

	def index
		@games = Game.all
	end

	def show
		@games = Game.all
		@user = current_user
		@game = Game.where(@user)
		@game = Game.find(params[:id])
		# @game.current_user
	end

	def new
		@game = Game.new
	end

	def create
	     if request.xhr?
               if current_user
                 @game = current_user.games.create(game_params)
                 render :json => @game
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

