class Api::V1::AuctionsController < ApplicationController

  before_action :authenticate_request!
  skip_before_action :authenticate_request!, only: [:index]
  before_action :find_auction, only: [:update, :destroy]
  after_action :verify_authorized, except: [:index, :destroy]

  def index
    @auctions = Auction.paginate(page: params[:currentp], per_page: 10)
    render status: 200
  end

  def show
     @auction = Auction.find(params[:id])
     authorize @auction
  end

  def create
    @auction = current_user.auctions.new(auctions_params)
    authorize @auction
    render status: @auction.save ? 201 : 422
  end

  def update
    @auction.update_attributes(auctions_params)
    authorize @auction
    render status: @auction.errors.any? ? 404 : 200
  end

  def destroy
    render status: @auction.destroy ? 200 : 422
  end

  def find_auction
    @auction = current_user.auctions.find(params[:id])
  end

  private

  def auctions_params
    params.require(:auction).permit(:name, :start, :finish, :description)
  end


end
