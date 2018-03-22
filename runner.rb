require "unirest"
# require "./parent.rb"
# require "./nanny.rb"
# require "./request.rb"


params = {parent_id: 1, nanny_id: 3, start_time: "6", end_time: "8", location: "chicago", number_of_children: 2, pay_rate: 15, status: "pending"}

Unirest.default_header("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjE3NjE4OTMsInN1YiI6Nn0.TFTwL4Lhd-wsp3OzSm1dbjY3yJhXWhg3WMp3Wn-bACs")

response = Unirest.post("http://localhost:3000/requests", parameters: params)
user = response.body

puts JSON.pretty_generate(user)


