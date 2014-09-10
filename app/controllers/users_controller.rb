class UsersController < ApplicationController
	
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
