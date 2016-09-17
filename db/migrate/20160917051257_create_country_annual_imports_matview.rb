class CreateCountryAnnualImportsMatview < ActiveRecord::Migration
  
  def up
    execute %{
    CREATE MATERIALIZED VIEW country_annual_imports AS
      SELECT
        imports.country_origin    AS country,
        imports.year              AS year,
        sum(imports.cif_usd)      AS cif_usd,
        sum(imports.cif_etb)      AS cif_etb,
        sum(imports.net_mass)     AS net_mass
      FROM
        imports
      GROUP BY
        imports.country_origin,
        imports.year
    }

    execute %{
      CREATE UNIQUE INDEX country_annual_imports_country_year
        ON country_annual_imports(country, year)
    }
  end

  def down
    execute %{
      DROP MATERIALIZED VIEW country_annual_imports
    }
  end
end
