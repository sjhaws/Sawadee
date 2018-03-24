class User < ActiveRecord::Base
  enum role: [:guest, :admin]
  def guest?
    persisted?
  end
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
