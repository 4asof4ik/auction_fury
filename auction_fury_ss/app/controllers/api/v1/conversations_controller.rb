module Api
  module V1
    class ConversationsController < ApplicationController
      before_action :authenticate_request!

      def index
        @conversations = @current_user.conversations
      end

      def show
        @conversation = @current_user.conversations.find(params[:id])
        render status: :ok
      end

      def create
        receiver = User.find_by(email: params[:receiver_email])
        if !receiver.nil?
          @conversation = Conversation.create(conversation_params);
          @conversation.users.concat([@current_user, receiver])
          render status: :created
        else
          render status: :not_found
        end
      end

      def conversation_params
        params.require(:conversation).permit(:name)
      end
    end
  end
end

