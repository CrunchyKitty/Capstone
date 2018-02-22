

 user = User.new(
                 first_name: "Nancy", 
                 last_name: "Joe",
                 status: "true",
                 email: "NancyJoe@gmail.com",
                 gender:"f",
                 age:28
                 )
       
     
  user.password = "password"

  user.save
