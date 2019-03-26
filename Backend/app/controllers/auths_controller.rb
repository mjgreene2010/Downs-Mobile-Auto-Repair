class AuthsController < ApplicationController

    

        # skip_before_action :authenticate, only: [:create]

        def create
    
            user = User.find_by({ username: params[:username]})
            if user.authenticate(params[:password])
                render json: {token: encode_token(user) }
            else
                render json: {error: true, message: 'wrong username or password'}
            end
    
        end


end