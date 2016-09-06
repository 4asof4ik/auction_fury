class Picture < ApplicationRecord
  belongs_to :imageable, polymorphic: true

  has_attached_file :image,
                    styles: { large: "600x600>", medium: "300x300>", thumb: "100x100>" },
                    default_url: ENV['DEFAULT_URL_UPLOAD']+"/assets/default.png",
                    path: ":rails_root/public/pictures/:id/:style_:filename",
                    url: ENV['DEFAULT_URL_UPLOAD']+"/pictures/:id/:style_:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
