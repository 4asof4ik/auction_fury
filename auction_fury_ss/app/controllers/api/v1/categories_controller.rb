module Api
  module V1
    class CategoriesController < ApplicationController
      respond_to :json
      before_action :authenticate_request!
      after_action :verify_authorized, except: :index
      #role check filter here for create update delete actions and skip for index

      def index
        @categories = Category.all
        render status: :ok
      end

      def create
        @category = Category.create(category_params)
        authorize @category
        if @category.persisted?
          render status: :created
        else
          render status: :unprocessable_entity
        end
      end

      def update
        @category = Category.update(category_id, category_params)
        authorize @category
        if @category.errors.empty?
          render status: :ok
        else
          render status: :unprocessable_entity
        end
      end

      def destroy
        @category = Category.destroy(category_id)
        authorize @category
        if @category.destroyed?
          render status: :ok
        else
          render status: :unprocessable_entity
        end
      end

      private

      def category_params
        params.require(:category).permit(:name, :description, :image, :current_user)
      end

      def category_id
        params.require(:id)
      end

    end
  end
end
