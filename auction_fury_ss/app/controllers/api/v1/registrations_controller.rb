require 'sidekiq/api'
module Api
  module V1
    class RegistrationsController < Devise::RegistrationsController
      respond_to :json

      def create
        build_resource(sign_up_params)
        resource.save
        yield resource if block_given?
        if resource.persisted?
          expire_data_after_sign_in!
          render status: :created
        else
          after_bad_sign_up_request
        end
      end

      protected

      def sign_up_params
        params.permit(:email,:password,:password_confirmation,:firstname,:lastname)
      end

      def after_bad_sign_up_request
        clean_up_passwords resource
        set_minimum_password_length
        respond_with resource
      end

    end
  end
end

