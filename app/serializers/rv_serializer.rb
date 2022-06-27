class RvSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :region, :description, :mileage


  has_many :users, serializer: UserObjectSerializer
  has_many :reviews
end
