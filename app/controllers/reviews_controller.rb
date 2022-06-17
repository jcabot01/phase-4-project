class ReviewsController < ApplicationController
  #GET
  ##index /reviews
  def index 
    reviews = Review.all
    render json: reviews, status: :ok
  end

  #GET
  ##show   /reviews/:id
  def show 
    review = find_review
    render json: review, status: :ok, include: [:rv, :user]
  end

  #POST
  ##create   /reviews
  def create
    review = Review.create!(review_params)
    render json: review, status: :accepted
  end

  #PATCH
  ##update    /reviews/:id
  def update
    review = find_review
    review.update!(review_params)
    render json: review, status: :accepted
  end

  #DELETE
  ##destroy    /reviews/:id
  def destroy
    review = find_review
    review.destroy
    head :no_content
  end

  private

  def find_review
    Review.find(params[:id])
  end

  def review_params
    params.permit(:review)
  end
  
end
