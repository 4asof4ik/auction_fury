class CreateProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :profiles do |t|
      t.references :user, foreign_key: true
      t.string :prefered_currency
      t.string :country
      t.string :state
      t.string :city
      t.string :street
      t.string :zip_code
      t.string :office
      t.string :phone
      t.string :prefered_language
      t.timestamps
    end
  end
end
