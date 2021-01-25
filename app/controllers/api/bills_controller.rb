class Api::BillsController < ApplicationController
    before_action :require_logged_in
    def index
        @bills = current_user.bills
        render "api/bills/index"
    end

    def show
        @bill = Bill.find(params[:id])
        render '/api/bills/show'
    end

    def create
        @bill = Bill.new(bill_params)
        @bill.author_id = current_user.id
        if @bill.save!
            render 'api/bills/show'
        else
            render json: @bill.errors.full_messages, status: 422
        end
    end

    def update
        @bill = Bill.find(params[:id])
        if @bill.author_id == current_user.id && @bill.update(bill_params)
            render 'api/bills/show'
        else
            render json: @bill.errors.full_messages, status: 422
        end
    end

    def destroy
        @bill = Bill.find(params[:id])
        if @bill.author_id == current_user.id
            @bill.destroy
            render 'api/bills/show'
        else
            render json: ['This is not your bill'], status: 404
        end
        
    end

    private
    def bill_params
        params.require(:bill).permit(:author_id, :amount, :description, :date, :equal )
    end
end