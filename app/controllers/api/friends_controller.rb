class Api::FriendsController < ApplicationController
    def index
        @friends = current_user.friends
    end

    def create
        @user = User.find_by(email: params[:friend][:email])
        if @user
           @friend = Friend.new(user_id: current_user.id, friend_id: @user.id)
           if @friend.save!
                render 'api/users/show'
           else
                render json: ["You are already friend with #{@user.username}"], status: 422
           end
        else
            render json: ['Friend does not exist'], status: 422
        end
    end

    def destroy
        @friend = Friend.find_by(friend_id: params[:id], user_id:current_user.id)
        if @friend.user_id == current_user.id
            @friend.destroy
            @user = current_user
            render 'api/users/show'
        else
            render json: ['This is not your friend'], status: 404
        end
    end

    private 

    def friend_params
        params.require(:friend).permit(:email, :username)
    end
end