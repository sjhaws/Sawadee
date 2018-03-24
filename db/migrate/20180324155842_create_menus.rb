class CreateMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.text :description
      t.float :price
      t.string :dietary
      t.string :category

      t.timestamps
    end
  end
end
