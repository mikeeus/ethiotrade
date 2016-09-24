require 'csv'
desc "Add csv import records"
task :import_imports => :environment do

  import_record_files = [
    "db/records/imports/import_2016.csv",
    "db/records/imports/import_2015.csv",
    "db/records/imports/import_2014.csv",
    "db/records/imports/import_2013.csv",
    "db/records/imports/import_2012.csv",
    "db/records/imports/import_2011.csv",
    "db/records/imports/import_2010.csv",
    "db/records/imports/import_2009.csv",
    "db/records/imports/import_2008.csv",
    "db/records/imports/import_2007.csv",
    "db/records/imports/import_2006.csv",
    "db/records/imports/import_2005.csv",
    "db/records/imports/import_2004.csv",
    "db/records/imports/import_2003.csv",
    "db/records/imports/import_2002.csv",
    "db/records/imports/import_2001.csv",
    "db/records/imports/import_2000.csv",
    "db/records/imports/import_1999.csv",
    "db/records/imports/import_1998.csv",
    "db/records/imports/import_1997.csv"
  ]

  current_year = 2016

  import_record_files.each do |file_path|

    CSV.foreach(file_path, headers: true, 
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
        if import.year == current_year || import.year == current_year.to_s
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
  
  end # import_records.each 
end # task :import_imports