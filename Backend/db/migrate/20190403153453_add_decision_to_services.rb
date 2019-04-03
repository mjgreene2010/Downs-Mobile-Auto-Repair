class AddDecisionToServices < ActiveRecord::Migration[5.2]
  def change
    add_column :services, :decision, :boolean
  end
end
