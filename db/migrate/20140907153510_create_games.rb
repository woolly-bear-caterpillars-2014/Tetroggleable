class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :score
      t.integer :scrabble_score
      t.integer :level
      t.integer :lines
      t.references :user, index: true

      t.timestamps
    end
  end
end
