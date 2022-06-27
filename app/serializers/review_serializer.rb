class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :user_id, :rv_id, :created_at#, :user#, :rv


  belongs_to :user, serializer: UserObjectSerializer
  belongs_to :rv
end
