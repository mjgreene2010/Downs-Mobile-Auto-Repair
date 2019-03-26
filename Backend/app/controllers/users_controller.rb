class UsersController < ApplicationController
  before_action :define_curent_user


    def index
        # @users = User.all
        render json: User.all
    end
    
    def show
        # @user=User.find(params[:id])
        render json: current_user
    end

    # def new
    #     user=User.new
    # end

    def create
        user= User.create(user_params)
        render json: user
    end

    # def edit
    # end

    def update
      current_user.update(user_params)
      render json: current_user
    end

    def destroy
      current_user.destroy
      render json: current_user
    end

    

    def user_params
        params.permit(:first_name, :last_name, :username, :password)
      end
        
      def define_curent_user
         if params[:id]
           @current_user = User.find(params[:id])
         else
           @current_user = User.new
         end
       end
   
       def current_user
         @current_user
       end
end