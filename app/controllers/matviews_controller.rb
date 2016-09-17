class MatviewsController < ApplicationController

  def homepage_chart
    @imports = CountryAnnualImport.group(:year).sum(:cif_usd)
    @exports = CountryAnnualExport.group(:year).sum(:fob_usd)

    render json: {
      annualImports: @imports,
      annualExports: @exports
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
