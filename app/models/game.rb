class Game < ActiveRecord::Base
	belongs_to :user

	validates :score, presense: true
	validates :scrabble_score, presense: true
	validates :level, presense: true
	validates :lines, presense: true

end
