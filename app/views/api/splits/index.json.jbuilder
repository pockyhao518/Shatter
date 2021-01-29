@payers.each do |payer| 
    json.set! payer.id do
        json.extract! payer, :id, :payer_id, :bill_id, :amount
    end
  
end