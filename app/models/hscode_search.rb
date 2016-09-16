class HscodeSearch

  def initialize(search_terms)
    @search_terms = search_terms
  end

  def search
    description_clause = @search_terms.split(' ').map{|x| "description ILIKE '%#{x}%'" }.join(' AND ')
    code_clause = @search_terms.split(' ').map{|x| "code::varchar(255) LIKE '%#{x}%'" }.join(' AND ')

    search_result = Hscode.where(description_clause + " OR " + code_clause)
    return search_result
  end
end

# Hscode.where("description ILIKE ? OR code::varchar(255) LIKE ?", "%#{@search_term}%", "%#{@search_term}%")