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
end
