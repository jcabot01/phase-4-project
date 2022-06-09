class CreateRvs < ActiveRecord::Migration[6.1]
  def change
    create_table :rvs do |t|
      t.string :name
      t.string :image_url
      t.text :description
      t.integer :mileage

      t.timestamps
    end
  end
end
