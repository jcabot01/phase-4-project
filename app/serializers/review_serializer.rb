class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :rv_id
end
