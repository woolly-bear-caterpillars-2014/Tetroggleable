class Game < ActiveRecord::Base
	belongs_to :user

	validates :score, presence: true
	validates :scrabble_score, presence: true
	validates :level, presence: true
	validates :lines, presence: true

end
