class User < ApplicationRecord
    attr_reader :password

    validates :username, :password_digest, :session_token, :email, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :bills,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Bill,
        dependent: :destroy

    has_many :friendship,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Friend,
        dependent: :destroy

    has_many :friends,
        through: :friendship,
        source: :friend,
        dependent: :destroy

    has_many :split_bills,
        primary_key: :id,
        foreign_key: :payer_id,
        class_name: :Split,
        dependent: :destroy

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64;
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
