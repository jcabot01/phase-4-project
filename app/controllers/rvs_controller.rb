class RvsController < ApplicationController
  #GET
  ##index /rvs
  def index 
    rvs = Rv.all
    render json: rvs, status: :ok
  end

  #GET
  ##show   /rvs/:id
  def show 
    rv = Rv.find(params[:id])
    render json: rv, status: :ok, serializer: RvSerializer
  end
  
end
