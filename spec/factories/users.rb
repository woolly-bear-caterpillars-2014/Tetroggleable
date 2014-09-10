FactoryGirl.define do 
	factory :user do 
		username "Johndoe"
		email "Johndoe@gmail.com"
		password "password"

		factory :invalid_user do 
			username nil
			email nil
			password nil
		end

		factory :current_user do 
			user_id 1
		end
	end
end