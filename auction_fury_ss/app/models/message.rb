class Message < ApplicationRecord
  belongs_to :conversation, required: false
  belongs_to :user, required: false

  validates :content, presence: true, length: { maximum: 512 }

end
