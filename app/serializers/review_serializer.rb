class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :rv_id, :created_at, :user

  belongs_to :user
  belongs_to :rv
end
