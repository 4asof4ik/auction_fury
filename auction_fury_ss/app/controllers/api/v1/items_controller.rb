class Api::V1::ItemsController < ApplicationController
  before_action :authenticate_request!
  skip_before_action :authenticate_request!, only: [:index]
  after_action :verify_authorized, except: [:index, :update]

  def index
    @items = Item.public_items
  end

  def show
    @item = Item.public_items.find_by(id: params[:id])
    authorize @item
    if @item
      render :item
    else
      return head(:not_found)
    end
  end

  def personal
    @items = current_user.items
    authorize @items, :show?
    render :index
  end

  def create
    @new_item = current_user.items.create(item_params)
    authorize @new_item
    if params[:pictures_attributes]
      @new_item.pictures.create(parse_pictures)
    else
      @new_item.pictures.create
    end
    render status: :created
  end

  def update
    @item = current_user.items.includes(:pictures).find_by(id: params[:id])
    if @item
      @item.update_attributes(item_params)
      if params[:pictures_attributes]
        @item.pictures.create(parse_pictures)
      elsif @item.pictures.empty?
        @item.pictures.create
      end
      render :item, status: :ok
    else
      return head(:not_found)
    end
  end

  def destroy
    item = current_user.items.find_by(params[:id])
    authorize item
    render status: item.try(:destroy) ? :ok : :unprocessable_entity
  end

  protected

  def parse_pictures
    params[:pictures_attributes].map do |img|
     { image: decode_base64_image(img) }
    end
  end

  def item_params
    item_param = params.require(:item).permit(:name,
                                              :description,
                                              :price,
                                              :public,
                                              :user_id,
                                              :category_id)
  end
end



