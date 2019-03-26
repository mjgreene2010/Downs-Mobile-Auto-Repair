class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.date :requested_date
      t.time :requested_time_earliest
      t.time :requested_time_latest
      t.text :details
      t.belongs_to :user, foreign_key: true


      t.timestamps
    end
  end
end
