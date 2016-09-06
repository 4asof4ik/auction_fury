class Auction < ApplicationRecord
  include AASM
  belongs_to :user
  has_many :items
  after_create :schedule_event

  validates :name, presence: true, length: { in: 4..50 }
  validates :start, presence: true
  validates :finish, presence: true
  validates :description, presence: true, length: { in: 10..500 }
  validate :finish_cannot_be_in_the_past

  def finish_cannot_be_in_the_past
    errors.add(:finish, "can't be in the past") if
      !finish.blank? && finish.to_i < start.to_i
  end

  aasm do
    state :draft, initial: true
    state :production
    state :closed

    event :create do
      transitions from: :draft, to: :production
    end

    event :closed do
      transitions from: :production, to: :closed
    end
  end

  def schedule_event
    AASMStateChangeWorkerCreate.perform_in(self.start, self.id)
    AASMStateChangeWorkerClosed.perform_in(self.finish, self.id)
  end
end
