require "rails_helper"

describe User do 
	let!(:user) { User.create!(username: "stephen", email:"stephen@gmail.com", password:"password") }

	context "username" do
		it "should return username" do 
			expect(user.username).to eq "stephen"
		end
	end
end