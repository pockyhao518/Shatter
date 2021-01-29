class Split < ApplicationRecord
    validates :bill, :payer_id, presence: true
    validates :bill_id, uniqueness: {scope: :payer_id}

    belongs_to :bill,
        foreign_key: :bill_id,
        primary_key: :id,
        class_name: :Bill

    belongs_to :payer,
        foreign_key: :payer_id,
        primary_key: :id,
        class_name: :User
end
