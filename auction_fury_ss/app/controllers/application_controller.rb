class ApplicationController < ActionController::API
  include Pundit
  attr_reader :current_user
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  def authenticate_request!
    unless user_id_in_token?
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
      return
    end
    @current_user = User.find(auth_token[:user_id])
  rescue JWT::VerificationError, JWT::DecodeError
    render json: { errors: ['Not Authenticated'] }, status: :unauthorized
  end


  def decode_base64_image(document)
    if document[:base64] && document[:filetype] && document[:filename]
      decoded_data = Base64.decode64(document[:base64])

      data = StringIO.new(decoded_data)
      data.class_eval do
        attr_accessor :content_type, :original_filename
      end

      data.content_type = document[:filetype]
      data.original_filename = File.basename(document[:filename])

      data
    end
  end

  private

  def http_token
    @http_token ||= if request.headers['Authorization'].present?
                      request.headers['Authorization'].split(' ').last
                    end
  end

  def payload(user)
    return nil unless user and user.id
    {
        auth_token: JsonWebToken.encode({user_id: user.id}),
        user: {id: user.id, email: user.email}
    }
  end

  def auth_token
    @auth_token ||= JsonWebToken.decode(http_token)
  end

  def user_id_in_token?
    http_token && auth_token && auth_token[:user_id].to_i
  end

  def user_not_authorized
    render status: 403
  end
end
