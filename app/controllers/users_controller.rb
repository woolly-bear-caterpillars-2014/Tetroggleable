class UsersController < ApplicationController
	include UsersHelper
	def index
		@users = User.all
	end

	def show
		@game = Game.where(current_user)
	end

	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
   		session[:user_id] = @user.id
			# @game = @user.games.create()

			redirect_to new_game_path
		else
			render :new
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :email, :password)
	end
end
