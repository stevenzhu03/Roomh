class CreateChatRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :chat_rooms do |t|
      t.string :name
      t.integer :match_id

      t.timestamps
    end
  end
end
