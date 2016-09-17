Rails.application.routes.draw do
  scope '/api' do
    resources :exports, only: [:index, :show]
    resources :imports, only: [:index, :show]
    resources :hscodes, only: [:index]
  end
 
  # Hscodes
  get '/api/hscodes/:code' => 'hscodes#show', as: :hscode
  get '/api/hscodes/search/:search' => 'hscodes#search', as: :hscodes_search

  # Tables
  get '/api/hscodes/:code/tables/:type/:year' => 'hscodes#tables', as: :hscode_tables
  # country tables

  # Charts/ Matviews routes
  get '/api/charts/homepage' => 'matviews#homepage', as: :homepage
  get '/api/charts/country/:country' => 'matviews#country', as: :country_chart
  get '/api/charts/year/:year' => 'matviews#year', as: :year
  get '/api/charts/hscode/:code' => 'matviews#hscode', as: :hscode_matview
  get '/api/refresh_matviews' => 'matviews#refresh_matviews', as: :refresh_matviews

  # country
  get '/api/country/:country' => 'matviews#country', as: :country
  # year
  get '/api/year/:year' => 'years#year'
  get '/api/year/:year/summary' => 'years#year_summary'
  # hscode
  get '/api/hscode/:code' => 'matviews#hscode'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
