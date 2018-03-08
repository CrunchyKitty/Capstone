

# parent = User.new(
#         first_name: "Louis",
#         last_name: "Smith",
#         status: "Approved",
#         email: "Louis@gmail.com",
#         gender: "F",
#         age: 38,
#         parent: true,
#         nanny: false,
#         password: "password",
#         password_confirmation: "password"
#         )

# parent.save

# nanny = User.new(
#         first_name: "Ann",
#         last_name: "Wilson",
#         status: "Approved",
#         email: "A.wilson@gmail.com",
#         gender: "F",
#         age: 29,
#         nanny: true,
#         parent: false,
#         password: "password",
#         password_confirmation: "password"
#         )

# nanny.save

request = Request.new(
         parent_id: 1,
         nanny_id: 2,
         start_time: 6,
         end_time: 8,
         location: "chicago",
         number_of_children: 3,
         pay_rate: 15,
         status: true
                     )
request.save




