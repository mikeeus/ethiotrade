require 'csv'

desc "Update imports for 2016"
task :update_imports_2016 => :environment do
  
  CSV.foreach('db/records/current/import_2016_06.csv', headers: true, 
    encoding: 'windows-1251:UTF-8') do |row|

    import_hash = row.to_hash
    code = import_hash['code'].to_i
    # Check if import record exists; if does update attributes; if not create new import
    import = Import.where(
      year: import_hash['year'],
      code: code, 
      country_origin: import_hash['country_origin'],
      country_consignment: import_hash['country_consignment']
    ).first

    # Check if hscode exists
    if !Hscode.find_by(code: code).nil?
      hscode = Hscode.find_by(code: code)
    elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
      hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
    else
      hscode = Hscode.find_by(code: 0)
    end

    # Use hash and hscode to build or create new import record
    import_record = {
      year: import_hash['year'],
      code: code,
      description: hscode.description,
      country_origin: import_hash['country_origin'],
      country_consignment: import_hash['country_consignment'],
      net_mass: import_hash['net_mass'],
      cif_etb: import_hash['cif_etb'],
      cif_usd: import_hash['cif_usd']
    }

    if import
      if import.year == 2016 || import.year == '2016'
        import.update_attributes({
          net_mass: import_hash['net_mass'],
          cif_etb: import_hash['cif_etb'],
          cif_usd: import_hash['cif_usd']
        })
      end
    else
      import_build = hscode.imports.build(import_record)
      import_build.save
    end
  end
end

desc "Update exports for 2016"
task :update_exports_2016 => :environment do
  
  CSV.foreach('db/records/current/export_2016_06.csv', headers: true, 
    encoding: 'windows-1251:UTF-8') do |row|

    export_hash = row.to_hash
    code = export_hash['code'].to_i
    # Check if export record exists; if does update attributes; if not create new export
    export = Export.where(
      year: export_hash['year'],
      code: code, 
      destination: export_hash['destination']
    ).first

    # Check if hscode exists
    if !Hscode.find_by(code: code).nil?
      hscode = Hscode.find_by(code: code)
    elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
      hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
    else
      hscode = Hscode.find_by(code: 0)
    end

    # Use hash and hscode to build or create new export record
    export_record = {
      year: export_hash['year'],
      code: code,
      description: hscode.description,
      destination: export_hash['destination'],
      net_mass: export_hash['net_mass'],
      fob_etb: export_hash['fob_etb'],
      fob_usd: export_hash['fob_usd']
    }

    if export 
      if export.year == 2016 || export.year == '2016'
        export.update_attributes({
          net_mass: export_hash['net_mass'],
          fob_etb: export_hash['fob_etb'],
          fob_usd: export_hash['fob_usd']
        })
      end
    else
      export_build = hscode.exports.build(export_record)
      export_build.save
    end
  end
end