class CreateUserProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :user_profiles do |t|
      t.string :name
      t.text :bio
      t.string :address
      t.string :city
      t.string :state
      t.integer :zipcode
      t.string :email
      t.integer :phone_number
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
