class ServicesController < ApplicationController

before_action :define_selected_service

    def index
        # @users = User.all
        render json: Service.all, methods: [ :user ]
    end
    
    def show
        # @user=User.find(params[:id])
        render json: current_service
    end

    # def new
    #     user=User.new
    # end

    def create
        service= Service.new(service_params)
        service.user = current_user
        service.save
        render json: service
    end

    # def edit
    # end

    def update
      current_service.update(service_params)
      render json: current_service
    end

    def destroy
      current_service.destroy
      render json: current_service
    end

    # @dishes= Dish.find(params[:id]).destroy
    #     # dishes.destroy
    #     render json: @dishes

    def service_params
        params.permit(:requested_date,
        :requested_time_earliest,
        :requested_time_latest,
        :details, :decision
        )
      end
        
      def define_selected_service
         if params[:id]
          @current_service = Service.find(params[:id])
         else
           @current_service = Service.new
         end
       end
   
       def current_service
         @current_service
       end

end
