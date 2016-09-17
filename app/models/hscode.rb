class Hscode < ApplicationRecord
  has_many :imports
  has_many :exports

  def related_codes
    bot_range = (self.code/10000)*10000
    top_range = bot_range + 9999
    related_codes = Hscode.where(code: bot_range..top_range)
    return related_codes
  end
end
