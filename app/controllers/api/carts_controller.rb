class Api::CartsController < ApplicationController
  before_action :set_cart, only: [:update]
  
  def index
    render json: Cart.all
  end

  def create
    cart = Cart.new(cart_params)
    if cart.save
      render json: cart
    else
      render json: { errors: cart.errors }, status: 422
    end
  end

  def update
    if @cart.update(cart_params)
      render json: Cart.all
    else  
      render json: { errors: @cart.errors }, status: 422
    end
  end

  def destroy
    cart.find(params[:id]).destroy
    render json: { message: 'Item Deleted' }
  end

  private

  def set_cart
    @cart = Cart.find(params[:id])
  end

  def cart_params
    params.require(:cart).permit(:total, :user_id)
  end
end
