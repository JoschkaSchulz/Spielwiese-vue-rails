class CreateLeaveDamages < ActiveRecord::Migration[6.1]
  def change
    create_table :leave_damages do |t|
      t.boolean :wetBrown
      t.boolean :dryBrown
      t.boolean :yellow
      t.boolean :losingLeaves
      t.string :parasites
      t.belongs_to :plant

      t.timestamps
    end
  end
end
