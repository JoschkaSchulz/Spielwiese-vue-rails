class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.integer :size
      t.string :watering

      t.timestamps
    end
  end
end
