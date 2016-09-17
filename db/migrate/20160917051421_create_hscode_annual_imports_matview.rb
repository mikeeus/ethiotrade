class CreateHscodeAnnualImportsMatview < ActiveRecord::Migration
  
  def up
  execute %{
  CREATE MATERIALIZED VIEW hscode_annual_imports AS
    SELECT
      hscodes.code          AS code,
      hscodes.description   AS description,
      imports.year          AS year,
      sum(imports.cif_usd)  AS cif_usd,
      sum(imports.cif_etb)  AS cif_etb,
      sum(imports.net_mass) AS net_mass
    FROM
      hscodes
    JOIN imports ON
      hscodes.code = imports.code
    GROUP BY
      hscodes.code,
      hscodes.description,
      imports.year
  }

  execute %{
    CREATE UNIQUE INDEX hscode_annual_imports_code_year
      ON hscode_annual_imports(code, year)
  }
  end

  def down
    execute %{
      DROP MATERIALIZED VIEW hscode_annual_imports
    }
  end
end
