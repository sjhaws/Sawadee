class Api::UsersController < ApplicationController
  before_action :set_user, only: [:index]
  
  def index
    render json: @user
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

end
