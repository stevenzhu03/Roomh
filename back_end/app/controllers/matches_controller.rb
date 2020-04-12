class MatchesController < ApplicationController

    def create

        match = Match.create(
            user_id: params[:user_id],
            matcher_id: params[:matcher_id],
            confirmed: false
        )

        render json: match.matcher
    end

    def confirm 
        user = User.find(params[:user_id])
        matcher = User.find(params[:matcher_id])

        user.confirm_match(matcher)

        # byebug
        render json: matcher
    end

end
