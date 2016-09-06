module Api
  module V1
    class AuthenticationController < ApplicationController

      def authenticate_user
        @response_object
        user = User.find_for_database_authentication(email: params[:email])
        if user.valid_password?(params[:password])
          @response_object =  payload(user)
        else
          @response_object = {errors: 'Invalid Username/Password', status: :unauthorized}
        end
      end

    end
  end
end
