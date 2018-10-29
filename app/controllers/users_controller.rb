require 'pry'
class UsersController < ApplicationController
    before_action :authenticate_user

    def show
        puts "User Show #{params}"
        @user = User.find_by(:id => params[:id])
        puts "User #{@user.email}"
        puts "News Sources #{@user.news_sources}"
        # TODO : verify id matches current user
        render json: @user, status: 200
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
        
        # for each news source in params, find or create by the news_source_id (essentially a name)
        # and then add if needed, add relationship to this user
        # params[:newsSources].each do | source | 
        #     s = NewsSource.find_or_create_by(news_source_id: source["news_source_id"]);
        #     UserNewsSource.find_or_create_by(user_id: @user.id, news_source_id: s.id );
        # end

        render json: @user, status: 200
    end    
end
