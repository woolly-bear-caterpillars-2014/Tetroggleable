require 'rails_helper'

describe UsersController do 
	let!(:user) { User.create!(username: "stephen", email:"stephen@gmail.com", password:"password") }

		describe "GET #show" do 
			it "assigns user to current user" do 
				get :show, id: user 
				controller.stub(:current_user).and_return(:user)
				# expect(assigns(:user)).to eq(current_user)
			end
		end
	end
