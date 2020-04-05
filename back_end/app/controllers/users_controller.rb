class UsersController < ApplicationController

    def index
        users = User.all
        render json:users
    end

    def create
        user = User.new(
            username: params[:username],
            password: params[:password],
            email: params[:email]
        )

        if user.save
            token = encode_tooken(user.id)
            render json: {user: user, token: token}
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    def show
        user = User.find(params[:id])

    end

    def update
        user = User.find(params[:id])
        user.update(user_params) 

        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private
    def user_params
        params.require(:user).permit(:username, :name, :email)
    end


end
