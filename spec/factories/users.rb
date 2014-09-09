FactoryGirl.define do 
	factory :user do 
		username "stephen"
		email "stephen@gmail.com"
		password "password"

		factory :invalid_user do 
			username nil
			email nil
			password nil
		end
	end
end