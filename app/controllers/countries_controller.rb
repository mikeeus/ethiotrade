class CountriesController < ApplicationController
  before_action :set_country, only: [:chart, :tables]

  def chart
    @country_annual_imports = CountryAnnualImport.where(country: @country).group(:year).sum(:cif_usd)
    @country_annual_exports = CountryAnnualExport.where(country: @country).group(:year).sum(:fob_usd)
    
    render json: {
      annualImports: @country_annual_imports,
      annualExports: @country_annual_exports
    }
  end

  def tables
    page = params[:page].to_i
    page_length = params[:page_length].to_i

    page_begin = (page - 1) * page_length
    page_end = page_begin + page_length - 1

    type = params[:type] # Either Import/I/i or Export/E/e
    t = type.slice(0)
    year = params[:year]

    if t == 'I' || t == 'i'
      full_table = Import.where(country_origin: @country, year: year).order('cif_usd DESC')
      @table = full_table.to_a.slice(page_begin..page_end)
      @pages = (full_table.count.to_d / page_length).ceil
    elsif t == 'E' || t == 'e'
      full_table = Export.where(destination: @country, year: year).order('fob_usd DESC')
      @table = full_table.to_a.slice(page_begin..page_end)
      @pages = (full_table.count.to_d / page_length).ceil
    end

    render json: {
      table: @table,
      pages: @pages
    }
  end

  private
    def set_country
      @country = params[:country]
    end
    

end
