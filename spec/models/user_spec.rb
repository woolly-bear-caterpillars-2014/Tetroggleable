require "rails_helper"

describe User do 
	let!(:user) { User.create!(username: "stephen", email:"stephen@gmail.com", password:"password") }

	context "username" do
		it "should return username" do 
			expect(user.username).to eq "stephen"
		end
	end
	context "email" do
		it "should return the email" do  
			expect(user.email).to eq("stephen@gmail.com")
		end
	end

	context "password" do 
		it "should return the password" do 
			expect(user.password).to eq("password")
		end
	end
end