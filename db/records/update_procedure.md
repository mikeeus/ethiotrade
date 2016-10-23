# Update procedure
Steps to update records


* Go to ets-formatter and purge database
* Import most recent records using import_records rake task
* Export records for that year using export_records rake task
* Upload retrieved files to db/records/updated/:year/ directory in this app
* Upload records from heroku using heroku run import_records[:year,:type] rake task