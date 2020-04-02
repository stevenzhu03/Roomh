class CreateMatches < ActiveRecord::Migration[6.0]
  def change
    create_table :matches do |t|
      t.references :user, index: true, foreign_key: true
      t.references :matcher, index: true
      t.boolean :confirmed
      

      t.timestamps
    end

    add_foreign_key :matches, :users, column: :matcher_id

  end
end
