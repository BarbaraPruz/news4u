class ApplicationController < ActionController::API
    # TODO: is something similar to protect_from_forgery needed?
    include Knock::Authenticable   
end
