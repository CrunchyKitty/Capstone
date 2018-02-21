class UsersController < ApplicationController
  
  def index
    users = User.all
    render json: users.as_json
  end 

  def create 
    user = User.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation:[:password_confirmation]
      )
      if user.save
        render json:{message: 'User created successfully'},
          status: :created
      else
        render json: {errors: user.errors.full_messages},
          status: :bad_request
      end
    end

  def show
    user = User.find(params[:id])
    render json: user.as_json
  end

  def update
    @user = User.find(params[:id])
    @user.first_name = params[:first_name] || @user.first_name
    @user.last_name = params[:last_name] || @user.last_name
    @user.email = params[:email] || @user.email
    @user.image_url = params[:image_url] || @user.image_url
    if @user.save
      render 'show.json.jbuilder'
    else
      render json: {message: @user.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy 
     user = User.find(params[:id])
     user.destroy
     render json: {message: "Successfully deleted user profile ##{user.id}"}
  end
end
