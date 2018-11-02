class UsersController < ApplicationController
    before_action :authenticate_user, except: [:create]

    def show
        @user = User.find_by(:id => params[:id])
        # TODO : verify id matches current user
        render json: @user, status: 200
    end

    def create
        puts "User Create #{params}"
        @user = User.create(user_params)
        p @user
        if @user.valid? then 
            render json: @user, status: 200
        else
            puts "User not valid!"
            puts "#{@user.errors.full_messages}"
            render json: {message: @user.errors.full_messages}, status: 400
        end
    end 

    def update
        puts "User Update #{params}"
        # TODO : verify id matches current user        
        @user = User.find_by(:id => params[:id])
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
    
    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
    
end
