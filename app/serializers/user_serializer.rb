class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :created_at
  

  has_many :reviews
  has_many :rvs, through: :reviews
end
