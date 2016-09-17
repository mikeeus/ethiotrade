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
    type = params[:type] # Either Import/I/i or Export/E/e
    t = type.slice(0)
    year = params[:year]

    if t == 'I' || t == 'i'
      @table = Import.where(country_origin: @country, year: year)
    elsif t == 'E' || t == 'e'
      @table = Export.where(destination: @country, year: year)
    end

    render json: {
      table: @table
    }
  end

  private
    def set_country
      @country = params[:country]
    end
    

end
