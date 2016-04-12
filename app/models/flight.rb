# == Schema Information
#
# Table name: flights
#
#  id             :integer          not null, primary key
#  flight_number  :text
#  origin         :text
#  destination    :text
#  departure_date :date
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  airplane_id    :integer          default("0")
#

class Flight < ActiveRecord::Base
  has_many :reservations
  has_many :users, :through => :reservations
  belongs_to :airplane
end
