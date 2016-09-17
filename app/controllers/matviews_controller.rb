class MatviewsController < ApplicationController

  def homepage
    @imports = CountryAnnualImport.group(:year).sum(:cif_usd)
    @exports = CountryAnnualExport.group(:year).sum(:fob_usd)

    render json: {
      annualImports: @imports,
      annualExports: @exports
    }
  end

  def country
    @country = params[:country]
    @country_annual_imports = CountryAnnualImport.where(country: @country).group(:year).sum(:cif_usd)
    @country_annual_exports = CountryAnnualExport.where(country: @country).group(:year).sum(:fob_usd)
    
    render json: {
      annualImports: @country_annual_imports,
      annualExports: @country_annual_exports
    }
  end



  def hscode
    @code = params[:code]
    @hscode_annual_imports = HscodeAnnualImport.where(code: @code).group(:year).sum(:cif_usd)
    @hscode_annual_exports = HscodeAnnualExport.where(code: @code).group(:year).sum(:fob_usd)
  
    render json: {
      annualImports: @hscode_annual_imports,
      annualExports: @hscode_annual_exports
    }
  end

  def refresh_matviews
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        country_annual_imports
    }
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        country_annual_exports
    }
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        hscode_annual_imports
    }
    ActiveRecord::Base.connection.execute %{
      REFRESH MATERIALIZED VIEW CONCURRENTLY
        hscode_annual_exports
    }
  end

  private


end
