class Friend < ApplicationRecord
    validates :user, :friend_id, presence: true
    validates :user_id, uniqueness: {scope: :friend_id}

    belongs_to :user,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :User

    belongs_to :friend,
        foreign_key: :friend_id,
        primary_key: :id,
        class_name: :User
end
