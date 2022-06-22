class RvSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :region, :description, :mileage, :reviews


  has_many :users
  has_many :reviews
end
