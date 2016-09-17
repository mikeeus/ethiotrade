Rails.application.routes.draw do
  scope '/api' do
    resources :exports, only: [:index, :show]
    resources :imports, only: [:index, :show]
    resources :hscodes, only: [:index]
  end
 
  # Hscodes
  get '/api/hscodes/:code', to: 'hscodes#show', as: :hscode
  get '/api/hscodes/search/:search', to: 'hscodes#search', as: :hscodes_search

  # Tables
  get '/api/hscodes/:code/tables/:type/:year', to: 'hscodes#tables', as: :hscode_tables
  # country tables

  # Charts/ Matviews routes
  get '/api/charts/homepage', to: 'matviews#homepage', as: :homepage
  get '/api/charts/year/:year', to: 'matviews#year', as: :year
  get '/api/charts/hscode/:code', to: 'matviews#hscode', as: :hscode_matview
  get '/api/refresh_matviews', to: 'matviews#refresh_matviews', as: :refresh_matviews

  # country
  get '/api/charts/country/:country', to: 'countries#chart', as: :country_chart
  get '/api/countries/:country/tables/:type/:year', to: 'countries#tables'

  # year
  get '/api/years/:year', to: 'years#charts_tables'
  get '/api/years/:year/summary', to: 'years#year_summary'
  
  # hscode
  get '/api/hscode/:code', to: 'matviews#hscode'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
