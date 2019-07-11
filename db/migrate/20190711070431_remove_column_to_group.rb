class RemoveColumnToGroup < ActiveRecord::Migration[5.0]
  def change
    remove_index :groups, :name
    remove_column :groups, :name, :string
  end
end
