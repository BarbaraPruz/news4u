class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.string :source_id
      t.string :name
      t.text :description
      t.string :url
      t.string :category
      t.string :country
      t.timestamps
    end
  end
end
