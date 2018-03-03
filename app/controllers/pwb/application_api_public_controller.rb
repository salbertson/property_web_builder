module Pwb
  class ApplicationApiPublicController < ActionController::Base
    protect_from_forgery with: :exception, prepend: true
    # include ActionController::HttpAuthentication::Token::ControllerMethods

    # before_action :current_agency, :check_user
    after_action :set_csrf_token

    def self.default_url_options
      { locale: I18n.locale }
    end

    private

    def render_json_error(message, opts = {})
      render json: message, status: opts[:status] || 422
    end

    # def current_agency
    #   @current_agency ||= (Agency.last || Agency.create)
    # end

    def set_csrf_token
      # http://rajatsingla.in/2017/05/15/how-to-add-csrf-in-ember-app
      if request.xhr?
        response.headers['X-CSRF-Token'] = form_authenticity_token.to_s
        response.headers['X-CSRF-Param'] = "authenticity_token"
      end
      # works in conjunction with updating the headers via client app
    end
  end
end
