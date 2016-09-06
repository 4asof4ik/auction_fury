class Api::V1::UsersController < ApplicationController
  before_action :authenticate_request!
  after_action :verify_authorized

  def index
    @users = User.paginate(page: params[:page])
    authorize User
  end

  def show
    @user = User.find(params[:id])
    authorize @user
    @absolute_url = request.base_url + @user.avatar.url(:medium)
  end

  def update
    @user = User.find(params[:id])
    authorize @user
    @user.assign_attributes(user_params)

    if params[:profile]
      @user.create_profile if @user.profile.nil?
      @user.profile.assign_attributes(profie_params)
    end

    @user.avatar = decode_base64_image(params[:profile_img]) if params[:profile_img]

    @absolute_url = request.base_url + @user.avatar.url(:medium)
    render status: @user.save ? 201 : 422
  end

  def destroy
    @user = User.destroy(params[:id])
    authorize @user
    render status: @user.destroy ? 200 : 422
  end

  private

  def user_params
    params.require(:user).permit(:firstname,:lastname,:email,:password,:password_confirmation,:profile)
  end

  def profie_params
    params.require(:profile).permit(:prefered_currency,:country,:state,:city,:street,:zip_code,:office,:phone,:prefered_language)
  end


end
