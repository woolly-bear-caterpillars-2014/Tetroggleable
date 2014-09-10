class AddStatsToGames < ActiveRecord::Migration
  def change
  	add_column :games, :longest_word, :string
  	add_column :games, :longest_word_score, :integer
  	add_column :games, :highest_word, :string
  	add_column :games, :highest_word_score, :integer
  	add_column :games, :most_common_word, :string
  end
end
