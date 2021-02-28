class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.fake == false
            if @user.save
            login(@user)
            render "api/users/show"
            else
                # debugger
                if User.find_by(email:params[:user][:email]).fake == true
                    @user = User.find_by(email:params[:user][:email]);
                    @user.update(user_params)
                    login(@user)
                    render "api/users/show"
                else
                    render json: @user.errors.full_messages, status: 422
                end
            
            end
        else
            if @user.save!
            render :show
            else
            render json: @user.errors.full_messages, status: 422
            end     
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :email, :fake)
    end
end
