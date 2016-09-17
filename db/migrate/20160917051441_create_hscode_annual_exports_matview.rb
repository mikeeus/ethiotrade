class CreateHscodeAnnualExportsMatview < ActiveRecord::Migration
  
  def up
  execute %{
  CREATE MATERIALIZED VIEW hscode_annual_exports AS
    SELECT
      hscodes.code          AS code,
      hscodes.description   AS description,
      exports.year          AS year,
      sum(exports.fob_usd)  AS fob_usd,
      sum(exports.fob_etb)  AS fob_etb,
      sum(exports.net_mass) AS net_mass
    FROM
      hscodes
    JOIN exports ON
      hscodes.code = exports.code
    GROUP BY
      hscodes.code,
      hscodes.description,
      exports.year
  }

  execute %{
    CREATE UNIQUE INDEX hscode_annual_exports_code_year
      ON hscode_annual_exports(code, year)
  }
  end

  def down
    execute %{
      DROP MATERIALIZED VIEW hscode_annual_exports
    }
  end
end
