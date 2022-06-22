class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at, :rvs
  

  has_many :reviews
  has_many :rvs
end
