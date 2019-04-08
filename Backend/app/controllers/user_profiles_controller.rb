class UserProfilesController < ApplicationController
    before_action :define_selected_user_profile

    def index
        # @users = User.all
        render json: UserProfile.all, methods: [ :user ]
    end
    
    def show
        # @user=User.find(params[:id])
        render json: current_user_profile
    end


    def create
        user_profile= UserProfile.new(user_profile_params)
        user_profile.user = current_user
        user_profile.save
        render json: user_profile
    end

    # def edit
    # end

    def update
      current_user_profile.update(user_profile_params)
      render json: current_user_profile
    end

    def destroy
      current_user_profile.destroy
      render json: current_user_profile
    end

    

    def user_profile_params
        params.permit(:name, :bio, :address, :city, :state, :zipcode, :email, :phone_number
        )
    end
        
      def define_selected_user_profile
         if params[:id]
          @current_user_profile = UserProfile.find(params[:id])
         else
           @current_user_profile = UserProfile.new
         end
       end
   
       def current_user_profile
         @current_user_profile
       end


end
