class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.float :amount, null:false
      t.boolean :equal, null:false
      t.string :description, null:false
      t.integer :author_id, null:false
      t.date :date, null:false
      t.text :note
      t.integer :group_id

      t.timestamps
    end
  end
end
