class MatchesController < ApplicationController

    def create
        match = Match.create(
            user_id: params[:user_id],
            matcher_id: params[:matcher_id],
            confirmed: false
        )

        render json: match
    end

end
