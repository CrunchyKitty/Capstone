json.user do
  json.partial! @user, partial: 'user', as: :user
end

json.requests do
  json.array! @user.created_requests, partial: "requests/request", as: :request 
end
