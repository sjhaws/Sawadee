class CreateCartLists < ActiveRecord::Migration[5.1]
  def change
    create_table :cart_lists do |t|
      t.string :menu_id
      t.belongs_to :cart, foreign_key: true

      t.timestamps
    end
  end
end
