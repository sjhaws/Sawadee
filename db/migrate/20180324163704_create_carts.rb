class CreateCarts < ActiveRecord::Migration[5.1]
  def change
    create_table :carts do |t|
      t.string :name
      t.string :phone
      t.float :total
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
