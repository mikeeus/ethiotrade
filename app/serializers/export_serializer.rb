class ExportSerializer < ActiveModel::Serializer
  attributes :id, :year, :code, :description, :destination, 
    :net_mass, :fob_usd, :fob_etb
end
