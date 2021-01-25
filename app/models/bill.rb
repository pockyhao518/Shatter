class Bill < ApplicationRecord
    validates :equal, inclusion: { in: [true, false]}

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

end
