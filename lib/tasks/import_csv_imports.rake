# require 'csv'
# desc "import import records for 2016"
# task :import_imports_2016 => :environment do
  
#   CSV.foreach('db/records/imports/import_2016.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end

# desc "import import records for 2015"
# task :import_imports_2015 => :environment do
  
#   CSV.foreach('db/records/imports/import_2015.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2014"
# task :import_imports_2014 => :environment do
  
#   CSV.foreach('db/records/imports/import_2014.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2013"
# task :import_imports_2013 => :environment do
  
#   CSV.foreach('db/records/imports/import_2013.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2012"
# task :import_imports_2012 => :environment do
  
#   CSV.foreach('db/records/imports/import_2012.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2011"
# task :import_imports_2011 => :environment do
  
#   CSV.foreach('db/records/imports/import_2011.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2010"
# task :import_imports_2010 => :environment do
  
#   CSV.foreach('db/records/imports/import_2010.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2009"
# task :import_imports_2009 => :environment do
  
#   CSV.foreach('db/records/imports/import_2009.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2008"
# task :import_imports_2008 => :environment do
  
#   CSV.foreach('db/records/imports/import_2008.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2007"
# task :import_imports_2007 => :environment do
  
#   CSV.foreach('db/records/imports/import_2007.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2006"
# task :import_imports_2006 => :environment do
  
#   CSV.foreach('db/records/imports/import_2006.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2005"
# task :import_imports_2005 => :environment do
  
#   CSV.foreach('db/records/imports/import_2005.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2004"
# task :import_imports_2004 => :environment do
  
#   CSV.foreach('db/records/imports/import_2004.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2003"
# task :import_imports_2003 => :environment do
  
#   CSV.foreach('db/records/imports/import_2003.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2002"
# task :import_imports_2002 => :environment do
  
#   CSV.foreach('db/records/imports/import_2002.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2001"
# task :import_imports_2001 => :environment do
  
#   CSV.foreach('db/records/imports/import_2001.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 2000"
# task :import_imports_2000 => :environment do
  
#   CSV.foreach('db/records/imports/import_2000.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 1999"
# task :import_imports_1999 => :environment do
  
#   CSV.foreach('db/records/imports/import_1999.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 1998"
# task :import_imports_1998 => :environment do
  
#   CSV.foreach('db/records/imports/import_1998.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end


# desc "import import records for 1997"
# task :import_imports_1997 => :environment do
  
#   CSV.foreach('db/records/imports/import_1997.csv', headers: true, 
#     encoding: 'windows-1251:UTF-8') do |row|

#     import_hash = row.to_hash
#     code = import_hash['code'].to_i
#     # Check if import record exists; if does update attributes; if not create new import
#     import = Import.where(
#       year: import_hash['year'],
#       code: code, 
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment']
#     ).first

#     # Check if hscode exists
#     if !Hscode.find_by(code: code).nil?
#       hscode = Hscode.find_by(code: code)
#     elsif Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).any?
#       hscode = Hscode.where(code: (code/1000*1000)..(code/1000*1000+999)).first
#     else
#       hscode = Hscode.find_by(code: 0)
#     end

#     # Use hash and hscode to build or create new import record
#     import_record = {
#       year: import_hash['year'],
#       code: code,
#       description: hscode.description,
#       country_origin: import_hash['country_origin'],
#       country_consignment: import_hash['country_consignment'],
#       net_mass: import_hash['net_mass'],
#       cif_etb: import_hash['cif_etb'],
#       cif_usd: import_hash['cif_usd']
#     }

#     if import
#       if import.year == 2016 || import.year == '2016'
#         import.update_attributes({
#           net_mass: import_hash['net_mass'],
#           cif_etb: import_hash['cif_etb'],
#           cif_usd: import_hash['cif_usd']
#         })
#       end
#     else
#       import_build = hscode.imports.build(import_record)
#       import_build.save
#     end
#   end
# end

