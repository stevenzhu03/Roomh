class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :name
      t.integer :age
      t.string :summary
      t.string :work_info
      t.string :sex
      t.string :budget
      t.string :move_in_date
      t.string :cleaning
      t.string :guests
      t.string :schedule
      t.string :pets


      t.timestamps
    end
  end
end
