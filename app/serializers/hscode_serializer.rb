class HscodeSerializer < ActiveModel::Serializer
  attributes :id, :code, :description, :unit, :special_permission, :duty,
    :excise, :vat, :sur, :withhold
end