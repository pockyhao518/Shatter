class CreateSplits < ActiveRecord::Migration[5.2]
  def change
    create_table :splits do |t|
      t.integer :payer_id, null:false
      t.integer :bill_id, null:false
      t.float :amount, null:false

      t.timestamps
    end
  end
end
