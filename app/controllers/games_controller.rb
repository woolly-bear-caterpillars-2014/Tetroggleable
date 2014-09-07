class GamesController < ApplicationController
	def index
	end


	def new
		@game = Game.new
	end

	def create
		@game = Game.new(params[:game])
		if @game.save
			redirect_to games_path
		else
			render :new
		end
	end

	private

	# def game_params
	# 	params.require(:game).permit(:score, :scrabble_score, :level, :lines, :user_id)
	# end
end
