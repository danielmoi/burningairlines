class CreateFlights < ActiveRecord::Migration
  def change
    create_table :flights do |t|
      t.text :flight_number
      t.text :origin
      t.text :destination
      t.date :departure_date

      t.timestamps null: false
    end
  end
end
