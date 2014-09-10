class GamesController < ApplicationController

	def index
		@games = Game.all
	end

	def show
		@game = Game.find(params[:id])
	end

	def new
		@game = Game.new
	end

	def create
   if request.xhr?
      if current_user
        @game = current_user.games.create(game_params)
        render json: @game
        end
    else
      render :new
    end
	end

	private

	def game_params
		params.require(:game).permit(:score, :scrabble_score, :level, :lines, :user_id, :longest_word, :longest_word_score, :highest_word, :highest_word_score, :most_common_word)
	end
end

