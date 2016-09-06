class Item < ApplicationRecord
  belongs_to :user, required: false
  belongs_to :category, required: false
  belongs_to :auction, required: false
  has_many :pictures, as: :imageable, dependent: :destroy

  scope :public_items, -> { includes(:pictures).where(public: true) }

  validates :name, presence: true, length: { maximum: 80 }
  validates :description, presence: true
  validates :price, presence: true, numericality: { greater_than: 0,
                                                    less_than: 100_000_000}

  def pictures_abs_url
    pictures.map do |picture|
      [ picture.image.url(:large),
        picture.image.url(:medium),
        picture.image.url(:thumb) ]
    end
  end

end
