FactoryGirl.define do
	factory :game do  
		score 10
		scrabble_score 10
		level 1
		lines 3
		user_id 1
	end

	factory :invalid_game do 
		score nil
		scrabble_score nil
		level nil
		lines nil
		user_id nil
	end
end