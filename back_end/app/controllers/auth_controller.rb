class AuthController < ApplicationController

    def login
        user = User.find_by(username: params[:username])

        if user && user.authenticate(params[:password])
          token = encode_token(user.id)

          render json: {user: {info: user, match_requests: user.match_requests, pending_matches: user.pending_matches, matches: user.matches}, token: token}
        else
          render json: {errors: "Incorrect Info"}
        end
    end
    
    def auto_login

      if session_user
        render json: {info: session_user, match_requests: session_user.match_requests, pending_matches: session_user.pending_matches, matches: session_user.matches}
      else 
        render json: {errors: "No such user"}
      end
      
    end
  
  end
  