module Api
  module V1
    class Api::V1::I18nController < ApplicationController
      respond_to :json

      def show
       render file: "config/locales/#{ params[:lang] == 'en' ? 'en' : 'ua' }.json"
      end
    end
  end
end