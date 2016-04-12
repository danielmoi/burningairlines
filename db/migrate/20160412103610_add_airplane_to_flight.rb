class AddAirplaneToFlight < ActiveRecord::Migration
  def change
    add_column :flights, :airplane_id, :integer, :default => false

  end
end
