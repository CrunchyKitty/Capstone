class RequestsController < ApplicationController
  before_action :authenticate_parent, only: [:create]
  before_action :authenticate_nanny, only: [:accept]

  def index
    @requests = current_user.created_requests
    render 'index.json.jbuilder'
  end

  def create
    @request = Request.new(
                              parent_id: current_user.id,
                              nanny_id: params[:nanny_id],
                              pay_rate: params[:pay_rate],
                              number_of_children: params[:number_of_children],
                              start_time: params[:start_time],
                              end_time: params[:end_time],
                              location: params[:location],
                              status: "pending"
                              )
    if @request.save
      render 'show.json.jbuilder'
    else
      @request.errors.full_messages.each do |error|
        puts error
      end
    end
  end

  def accept
    @request = Request.find(params[:id])
    @request.update(nanny_id: current_user.id, status: "accepted")
    render 'show.json.jbuilder'
    #change this to accept an array of id's
  end
 
  def show
    @request = Request.find(params[:id])

    render 'show.json.jbuilder'
  end

  def update
    @request = Request.find(params[:id])
    
    @request.start_time = params[:start_time] || @request.start_time
    @request.end_time = params[:end_time] || @request.end_time
    @request.location = params[:location] || @request.location
    @request.number_of_children = params[:number_of_children] || @request.number_of_children
    @request.pay_rate = params[:pay_rate] || @request.pay_rate
    
    if @request.save
      render 'show.json.jbuilder'
    else
      render json: {message: @request.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    request = request.find(params[:id])
    request.destroy
    render json: {message: "Successfully destroyed request ##{request.id}"}
  end
end
  