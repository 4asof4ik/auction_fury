module Api
  module V1
    class MessagesController < ApplicationController
      before_action :authenticate_request!

      def create
        unless message_params[:conversation]
          render status: :forbidden
          return
        end
        @message = Message.create(message_params)
        if @message.persisted?
          render status: :created
        else
          render status: :unprocessable_entity
        end
      end

      private

      def conversation
        Conversation.find(params[:conversation_id])
      end

      def message_params
        message_params = params.require(:message).permit(:content)
        message_params[:user] = @current_user
        @conversation = conversation
        if (@current_user.conversations.include?(@conversation))
          message_params[:conversation] = @conversation
        end
        message_params
      end
    end
  end
end
