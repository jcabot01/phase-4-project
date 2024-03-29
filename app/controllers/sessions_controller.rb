class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]

  #POST create session, place cookie in user browser.  Must pass auth: based on username & password .authenticate?
  #create   /login
  def create 
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end 
  end

  #DELETE destroy session hash to logout out user
  ##destroy   /logout
  def destroy
    session.delete :user_id
    head :no_content
  end 

end
