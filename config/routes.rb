Rails.application.routes.draw do
  scope '/api' do
    resources :hscodes, only: [:index]
    # Search
    get '/hscodes/search/:search', to: 'hscodes#search', as: :search

    # Homepage Chart / Matviews refresh
    get '/charts/homepage', to: 'matviews#homepage_chart', as: :homepage_chart
    get '/refresh_matviews', to: 'matviews#refresh_matviews', as: :refresh_matviews

    # Hscode Detail
    get '/hscodes/:code', to: 'hscodes#show', as: :hscode
    get '/charts/hscodes/:code', to: 'hscodes#chart', as: :hscode_chart
    get '/tables/hscodes/:code/:type/:year/:page_length/:page', to: 'hscodes#tables', as: :hscode_tables

    # Country Detail
    get '/countries/:code', to: 'countries#show', as: :country    
    get '/charts/countries/:country', to: 'countries#chart', as: :country_chart
    get '/tables/countries/:country/:type/:year/:page_length/:page', to: 'countries#tables', as: :country_tables

    # year
    get '/years/:year/summary', to: 'years#year_summary', as: :year_summary
    get '/years/:year', to: 'years#charts_tables', as: :year_charts_tables
  
  end # scope 'api'

end # routes.draw
