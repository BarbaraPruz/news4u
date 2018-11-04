class UsersController < ApplicationController
    before_action :authenticate_user, except: [:create]
    before_action :get_user, except: [:create]

    def show
        if current_user?
            render json: @user, status: 200            
        else
            render json: {message: "Invalid Request"}, status: 401
        end
    end

    def create
        @user = User.create(user_params)
        if @user.valid? then 
            render json: @user, status: 200
        else
            render json: {message: @user.errors.full_messages}, status: 400
        end
    end 

    def update
        if ! current_user?
            render json: {message: "Invalid Request"}, status: 401
        else
            # we want to replace all the existing news sources with the new list of sources
            # Since news sources won't be too many, keeping it simple but just deleting all
            # and then adding.  Alternatively, we could search for the exact differences...
            @user.news_sources.delete_all       
            params[:newsSources].each do | source | 
                s = NewsSource.find_or_create_by(news_source_id: source["news_source_id"]);
                @user.news_sources << s;
            end
            render json: @user, status: 200
        end
    end 
    
    private

    def get_user
        @user = User.find_by(:id => params[:id])
    end

    def current_user?     # param user id is equal to current user (from token/auth)
        @user.id == current_user.id
    end

    def user_params
      params.require(:user).permit(:email, :password)
    end
    
end
