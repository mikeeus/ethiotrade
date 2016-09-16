require 'csv'
desc "import export records"
task :import_exports => :environment do
  
  CSV.foreach('db/records/exports/exports.csv', headers: true, 
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