class Bill < ApplicationRecord
    validates :equal, inclusion: { in: [true, false]}

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_many :split_payer,
        primary_key: :id,
        foreign_key: :bill_id,
        class_name: :Split,
        dependent: :destroy
end
