class ApplicationController < ActionController::API

  def authenticate_nanny
    unless current_user && current_user.nanny 
      render json: {message: "You are not authorized"},
      status: :unauthorized
    end
  end

  def authenticate_parent
    unless current_user && current_user.parent 
      render json: {message: "You are not authorized"},
      status: :unauthorized
    end
  end
end
