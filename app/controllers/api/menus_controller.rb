class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:update, :edit]
  
  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: 422
    end
  end

  def edit
  end

  def update
    if @menu.update(menu_params)
      render json: Menu.all
    else  
      render json: { errors: @menu.errors }, status: 422
    end
  end

  def destroy
    Menu.find(params[:id]).destroy
    render json: { message: 'Item Deleted' }
  end

  private

  def set_menu
    @menu = Menu.find(params[:id])
  end

  def menu_params
    params.require(:menu).permit(:name, :description, :price, :dietary, :category)
  end
end
