class Api::SplitsController < ApplicationController

    def index
        @payers = current_user.bills.map{|bill| bill.split_payer}.flatten
        @payers
    end

    def create
        @split = Split.new(split_params)
        if @split.save!
        render json: ["New split"], status: 200
        else
        render json: @split.errors.full_messages, status: 422
        end
    end

    def update
        @split = Split.find(params[:id])
        if @split.update(split_params)
        render json: ["Splituccess s updated"], status: 200
        else
        render json: @split.errors.full_messages, status: 422
        end
    end

    def destroy
        @split = Split.find(params[:id])
        if @split
        @split.delete
        render json: ["Split success deleted"], status: 200
        else
        render json: ["Split does not exit"], status: 422
        end
    end

    private

    def split_params
        params.require(:split).permit(:bill_id, :payer_id, :amount)
    end

end