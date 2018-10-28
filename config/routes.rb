Rails.application.routes.draw do
  scope '/api' do
    get '/users/:id' => 'users#show'
    post 'user_token' => 'user_token#create'
  end
  
end
