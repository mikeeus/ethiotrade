class CreateCountryAnnualExportsMatview < ActiveRecord::Migration
  
  def up
    execute %{
    CREATE MATERIALIZED VIEW country_annual_exports AS
      SELECT
        exports.destination   AS country,
        exports.year          AS year,
        sum(exports.fob_usd)  AS fob_usd,
        sum(exports.fob_etb)  AS fob_etb,
        sum(exports.net_mass) AS net_mass
      FROM
        exports
      GROUP BY
        exports.destination,
        exports.year
    }

    execute %{
      CREATE UNIQUE INDEX country_annual_exports_country_year
        ON country_annual_exports(country, year)
    }
  end

  def down
    execute %{
      DROP MATERIALIZED VIEW country_annual_exports
    }
  end
end
