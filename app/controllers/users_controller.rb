require 'pry'
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
            render json: '{status: "Error. Failed to create user"}'
        end
    end 

    def update
        puts "User Update #{params}"
        # TODO : verify id matches current user        
        @user = User.find_by(:id => params[:id])
        # delete any user - news source relationships not in the updated list
        # TODO
        # @user.news_sources.delete_if do |source|
        #     ! params[:newsSource].find |snew| do
        #         snew.news_source_id == source.news_source_id 
        #     end
        # end
        #  Consider slice : params.slice(*available_option_keys)
        
        # for each news source in params, find or create by the news_source_id (essentially a name)
        # and then add if needed, add relationship to this user
        params[:newsSources].each do | source | 
            s = NewsSource.find_or_create_by(news_source_id: source["news_source_id"]);
            UserNewsSource.find_or_create_by(user_id: @user.id, news_source_id: s.id );
        end

        render json: @user, status: 200
    end 
    
    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
    
end
