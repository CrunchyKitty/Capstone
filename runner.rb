require "unirest"
require "./parent.rb"
require "./nanny.rb"
require "./request.rb"

# response = Unirest. post("http://localhost:3000/users")
# user = response.body



parent = Parent.new(
        first_name: "Louis",
        last_name: "Smith",
        status: "Approved",
        email: "Louis@gmail.com",
        gender: "F",
        age:38,
        created_at: 11-21-2017, 
        updated_at:12-5-2017
        )

nanny = Nanny.new(
        first_name: "Ann",
        last_name: "Wilson",
        status: "Approved",
        email: "A.wilson@gmail.com",
        gender: "F",
        age:29,
        created_at: 09-21-2016, 
        updated_at:10-9-2017
        )
