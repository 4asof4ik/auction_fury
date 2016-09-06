module Api
  module V1
    class HomeController < ApplicationController
      before_filter :authenticate_request!
      def index
        @hash = { request: "rendered successfully" }
      end
    end
  end
end
