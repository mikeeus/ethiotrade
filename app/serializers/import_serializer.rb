class ImportSerializer < ActiveModel::Serializer
  attributes :id, :year, :code, :description, :country_origin, 
    :country_consignment, :net_mass, :cif_usd, :cif_etb
end
