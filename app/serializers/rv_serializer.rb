class RvSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :mileage
end
