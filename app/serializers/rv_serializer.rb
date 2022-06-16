class RvSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :region, :description, :mileage

  #belongs_to :users
  has_many :users
end
