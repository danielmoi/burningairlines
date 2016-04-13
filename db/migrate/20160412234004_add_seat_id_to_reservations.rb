class AddSeatIdToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :seat_id, :string

  end
end
