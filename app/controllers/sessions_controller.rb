class SessionsController < ApplicationController
	def new
  end

  def create
    @user = User.find_by(:username => params[:username])
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      redirect_to new_game_path
    else
      flash.now[:notice] = "Please enter valid username or password!"
      render :new
    end

  end

  def destroy
    session.clear
    redirect_to root_url
    flash[:success] = "Successfully logged out!"
  end
end
