class Api::CartListsController < ApplicationController
  before_action :set_cartlist, only: [:update]
  
  def index
    render json: CartList.all
  end

  def create
    cartlist = CartList.new(cart_params)
    if cartlist.save
      render json: cartlist
    else
      render json: { errors: cartlist.errors }, status: 422
    end
  end

  def update
    if @cartlist.update(cartlist_params)
      render json: CartList.all
    else  
      render json: { errors: @cartlist.errors }, status: 422
    end
  end

  def destroy
    cartlist.find(params[:id]).destroy
    render json: { message: 'Item Deleted' }
  end

  private

  def set_cartlist
    @cartlist = CartList.find(params[:id])
  end

  def cart_params
    params.require(:cartlist).permit(:menu_id, :cart_id)
  end
end
