Rails.application.routes.draw do
  resources :exports
  resources :imports
  scope 'api' do
    get '/hscodes/search/:search_term', to: 'hscodes#search' 
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
