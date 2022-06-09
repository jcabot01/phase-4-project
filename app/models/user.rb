class User < ApplicationRecord
  has_many :reviews
  has_many :rvs, through: :reviews
end
