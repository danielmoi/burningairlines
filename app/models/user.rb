# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :text
#  email           :text
#  password_digest :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  admin           :boolean          default("false")
#

class User < ActiveRecord::Base
  has_many :flights, :through => :reservations
  has_many :reservations
end
