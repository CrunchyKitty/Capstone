class User < ApplicationRecord
  has_secure_password

  has_many :created_requests, class_name: "Request", foreign_key: "parent_id"
  has_many :received_requests, class_name: "Request", foreign_key: "nanny_id"

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true

  def pending_requests
    created_requests.where(status: "pending")
  end

  def accepted_requests
    created_requests.where(status: "accepted")
  end
end



