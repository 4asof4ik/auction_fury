module Api
  module V1
    class ConfirmationsController < Devise::ConfirmationsController
      respond_to :json

      def show
        self.resource = resource_class.confirm_by_token(params[:confirmation_token])
        yield resource if block_given?
        if !resource.valid?
          respond_with(resource.errors, status: :unprocessable_entity)
        else
          @token = payload(resource)
          render status: :ok
        end
      end

    end
  end
end
