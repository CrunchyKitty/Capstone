User.create!([
  {first_name: "Michelle", last_name: "Beans", email: "Beans@email.com", gender: "M", age: 32, parent: false, nanny: false, status: nil, password: "password", city: "Chicago", state: "IL", zip_code: 60632, image_file_name: nil, image_content_type: nil, image_file_size: nil, image_updated_at: nil},
  {first_name: "Ann", last_name: "Wilson", email: "A.wilson@gmail.com", gender: "M", age: 32, parent: false, nanny: true, status: true, password: "password", city: "Chicago", state: "IL", zip_code: 60632, image_file_name: nil, image_content_type: nil, image_file_size: nil, image_updated_at: nil},
  {first_name: "Louis", last_name: "Lane", email: "Louis@gmail.com", gender: "M", age: 32, parent: true, nanny: false, status: true, password: "password", city: "Chicago", state: "IL", zip_code: 60632, image_file_name: nil, image_content_type: nil, image_file_size: nil, image_updated_at: nil},
  {first_name: "Dan ", last_name: "Daman", email: "Damandan@gmail.com", gender: "M", age: 32, parent: false, nanny: false, status: nil, password: "password", city: "", state: "", zip_code: 60632, image_file_name: nil, image_content_type: nil, image_file_size: nil, image_updated_at: nil},
  {first_name: "Idrys", last_name: "Calidrys", email: "Idrys@gmail.com", gender: "F", age: nil, parent: false, nanny: false, status: nil, password: "password", city: "Chicago", state: "IL", zip_code: nil, image_file_name: nil, image_content_type: nil, image_file_size: nil, image_updated_at: nil}
])
Request.create!([
  {parent_id: 1, nanny_id: 2, start_time: "6", end_time: "8", location: "chicago", number_of_children: 2, pay_rate: 15, status: "pending"},
  {parent_id: 1, nanny_id: 2, start_time: "6", end_time: "8", location: "chicago", number_of_children: 3, pay_rate: 15, status: "pending"}
])

