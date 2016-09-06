Devise::Async.setup do |config|
  config.backend = :sidekiq
  config.queue   = :default
end

module Devise
  module Models
    module Async
      protected

      def send_devise_notification(notification, token, opts = {})
        opts[:token] = token
        return super(notification, opts) unless Devise::Async.enabled

        if changed?
          devise_pending_notifications << [notification, opts]
        else
          Devise::Async::Worker.enqueue(notification, self.class.name, id.to_s, opts)
        end
      end
    end
  end
end
