
var NoUserPage = {
  template: "#no-user-page",
  data: function(){
    return {

    }
  }
};

// var UsersIndexPage = {
//   template: "#users-index-page",
//   data: function() {
//     return {
//       users: [],
//       currentUser: {formatted: {}}
//     };
//   },
//   created: function() {
//     axios.get("/users")
//       .then(function(response) {
//         this.users = response.data;
//       }.bind(this));
//   },
//   methods: {
//     setCurrentUser: function(user) {
//       this.currentUser = user;
//     }
//   },
//   computed: {}
// };

// var UsersNewPage = {
//   template: "#users-new-page",
//   data: function() {
//     return {
//       first_name: "",
//       last_name: "",
//       email: "",
//       gender: "",
//       city: "",
//       state: "",
//       zipCode: "",
//       imageUrl: "",
//       errors: []
//     };
//   },
//   methods: {
//     submit: function() {
//       var params = {
//         first_name: this.firstName,
//         last_name: this.last_name,
//         email: this.email,
//         gender: this.gender,
//         city: this.city,
//         state: this.state,
//         zipCode: this.zipCode,
//         image_url: this.imageUrl
//       };
//       axios
//         .post("/users", params)
//         .then(function(response) {
//           router.push("/");
//         })
//         .catch(
//           function(error) {
//             if (error.response.status === 401){
//               router.push("/login");
//             } else if (error.response.status === 422) {
//               this.errors = error.response.data.errors;
//             } else {
//               router.push("/");
//             }
//           }.bind(this)
//         );
//     }
//   }
// };

var UsersShowPage = {
  template: "#users-show-page",
  data: function() {
    return {
      user: {
        first_name: "",
        last_name:"",
        email:"",
        gender:"",
        city:"",
        state:"",
        zipCode:"",
        imageUrl:"",
        errors:[]   
      }
    }
  },
  created: function() {
    axios.get("/users/ + this.$route.params.id" )
        .then(function(response) {
          this.user = response.data;
        }.bind(this));
  }
};

var UsersEditPage = {
    template: "#users-edit-page",
    data: function () {
      return {
      first_name: "",
      last_name:"",
      email:"",
      gender:"",
      city:"",
      state:"",
      zipCode:"",
      imageUrl:"",
      password:"",
      password_confirmation: "",
      errors:[]    
      };
    },
    created: function () {
      axios 
      .get("/users/" + this.$route.params.id)
      .then(function(response) {
          console.log(response.data);
          var user = response.data;
          this.first_name = user.first_name
          this.last_name = user.last_name
          this.email = user.email
          this.gender = user.gender
          this.city = user.city
          this.state = user.state
          this.zipCode = user.zipCode
          this.image_url = user.image_url
          this.password = user.password
          this.password_confirmation = user.passwordConfirmation
        }.bind(this));
    }, 

methods: {
  submit: function () {
    var params = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      gender: this.gender, 
      city: this.city, 
      state: this.state, 
      zipCode: this.zipCode, 
      image_url: this.image_url,
      password: this.password, 
      password_confirmation:this.password_confirmation 
    };

    axios 
      .patch("/users/" + this.$route.params.id, params).then(function(response) {
        router.push("/profile");
      }.bind(this))
      .catch(
        function(error) {
          this.errors = error.response.data.errors;
          router.push("/profile");
        }.bind(this))
      }
    },

    uploadFile: function(event) {
      if (event.target.files.length > 0) {
        var formData = new FormData();
        formData.append("image", event.target.files[0]);

        axios
          .post("http://localhost:3000/users/images", formData)
          .then(function(response) {
            console.log(response);
            // this.title = "";
            // this.body = "";
            event.target.value = "";
          }.bind(this));
      }
    }
  };
  


   
var UsersDestroyPage = {
  created: function() {
    axios.delete("/users/" + this.$route.params.id).then(function(response) {
      router.push("/");
    });
  }
}

  // Request components

// var RequestsIndexPage = {
//   template: "#requests-index-page"
//   data: function() {
//     return { 
//       // requests: [],
//       requests: {formatted: {}}
//     };
//   },
//   created: function() {
//     axios.get("/requests")
//       .then(function(response) {
//         this.requests = response.data;
//       }.bind(this))
//     },
//   };

var RequestsNewPage = {
  template: "#requests-new-page",
  data: function() {
    return {
        nanny_id: "",
        pay_rate: "",
        number_of_children:"", 
        start_time:"", 
        end_time: "",
        location: "",
        errors: []
    };
  },
  // created: function(){
  //   console.log("Zipora");
  // },
  methods: {
    submit: function() {
      var params = { 
        nanny_id: this.nanny_id,
        pay_rate: this.pay_rate,
        number_of_children: this.number_of_children,
        start_time: this.start_time,
        end_time: this.end_time,
        location: this.location
      };
      axios
        .post("/requests", params)
        .then(function(response) {
          router.push("/profile");
        })
        .catch(
          function(error) {
            if (error.response.status === 401){
              router.push("/login");
            } else if (error.response.status === 422) {
              this.errors = error.response.data.errors;
            } else {
              router.push("/");
            }
          }.bind(this)
        );
    }
  }
};

var RequestsShowPage = {
  template: "#requests-show-page",
  data: function () {
    return {
      parent_id: "", 
      nanny_id: "",
      pay_rate: "",
      number_of_children:"", 
      start_time:"", 
      end_time: "",
      location: "",
      errors: []
    };
  },
  created: function() {
    axios.get("requests/" + this.$route.params.id)
      .then(function(response) {
        this.request = response.data;
      }.bind(this));
  }
}
 
var RequestsEditPage = {
  template: "#request-edit-page",
  data: function() {
    return {
      parent_id: "", 
      nanny_id: "",
      pay_rate: "",
      number_of_children:"", 
      start_time:"", 
      end_time: "",
      location: "",
      errors: []
    };
  },
  created: function() {
    axios
      .get("/requests/" + this.$route.params.id)
      .then(function(response) {
        console.log(response.data);
        var request = response.data;
        this.parent_id = request.parent_id
        this.nanny_id = request.nanny_id
        this.pay_rate = request.pay_rate
        this.number_of_children = request.number_of_children
        this.start_time = request.start_time
        this.end_time = request.end_time
        this.location = request.location  
      }.bind(this));
  },
  methods: {
    submit: function() {
      var params = {
        parent_id : this.parent_id, 
        nanny_id : this.nanny_id,
        pay_rate : this.pay_rate,
        number_of_children : this.number_of_children,
        start_time : this.start_time,
        end_time : this.end_time,
        location : this.location
      };
      axios 
      .patch("/requests/" + this.$route.params.id,params)
      .then(function(response) {
        router.push("/profile/");
      }.bind(this))
      .catch(
        function(error) {
          this.errors = error.response.data.errors;
          router.push("/login");
        }.bind(this));
    }
  }
};

var RequestsAcceptPage = {
  created: function() {
    axios.accept("/requests/" + this.$route.params.id)
    .then(function(response) {
      router.push("/")
    });
  }
}

var RequestsDestroyPage = {
  created: function() {
    axios.delete("/requests/" + this.$route.params.id)
      .then(function(response) {
        router.push("/")
      });
  }
}


  // Auth components

// var SignupPage = {
//   template: "#signup-page",
//   data: function () {
//     return {
//       first_name: "" ,
//       last_name: "",
//       email: "" ,
//       gender: "" ,
//       age: "",
//       city: "" , 
//       state: "" , 
//       zipCode: "" , 
//       // image_url: "" ,
//       password: "" , 
//       password_confirmation:"" ,
//       // errors: []
//     };
//   },
// methods: {
//   submit: function () {
//     var params = {
//       first_name: this.first_name,
//       last_name: this.last_name,
//       email: this.email,
//       gender: this.gender, 
//       age: this.age,
//       city: this.city, 
//       state: this.state,
//       zipCode: this.zipCode,
//       image_url: this.image_url,
//       password: this.password,
//       password_confirmation: this.password_confirmation
//     };
//     axios
//       .post("/users",params)
//       .then(function(response) {
//         router.push("/login");
//       })
//       .catch(
//         function(error) {
//           this.errors = error.response.data.errors;
//         }.bind(this)
//       );
//     }
//   }
// };

var SignupPage = {
  template: '#signup-page',
  data: function() {
    return {
            first_name: "" ,
            last_name: "",
            email: "" ,
            gender: "" ,
            age: "",
            city: "" , 
            state: "" , 
            zipCode: "" , 
            password: "" , 
            password_confirmation:"",
            errors: []
    };
  },
  created: function() {},
  methods: {
    uploadFile: function(event) {
      if (event.target.files.length > 0) {
        var formData = new FormData();
        formData.append("first_name", this.first_name);
        formData.append("last_name", this.last_name);
        formData.append("email", this.email);
        formData.append("gender", this.gender);
        formData.append("city", this.city);
        formData.append("state", this.state);
        formData.append("zipCode", this.zipCode);
        formData.append("password", this.password);
        formData.append("password_confirmation", this.password_confirmation);
        formData.append("image", event.target.files[0]);

        axios
        .post("/users", formData)
        .then(function(response) {
          console.log("test");
          this.first_name = "";
          this.last_name = "";
          this.email = "";
          this.gender = "";
          this.city = "";
          this.state = "";
          this.zipCode = "";
          this.password = "";
          this.password_confirmation = "";
          event.target.value = "";
        }.bind(this));
      }
    }
  },
  computed: {}
};

var LoginPage = { 
  template: "#login-page",
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        auth: { email: this.email, password: this.password }
        };
      axios
      .post("/user_token", params)
      .then(function(response) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        router.push("/profile");
      })
      .catch (
        function(error) {
          this.errors = ["Invalid email or password"];
          this.email = "";
          this.password = "";
        }.bind(this)
      );
    }
  }
};

var UserProfilePage = {
  template: "#user-profile-page",
  data: function() {
    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        city: "",
        state: "",
        zipCode: "",
        imageUrl: "",
        errors:[]   
      },
      requests: [{}]
    };
  },

  created: function() {
    axios.get("/profile").then(function(response) {
      this.user = response.data["user"];
      this.requests = response.data["requests"];
    }.bind(this));
  }
};


var LogoutPage = {
  created: function() {
    axios.defaults.headers.common["Authorization"] = undefined; 
    localStorage.removeItem("jwt");
    router.push("/");
  }
};

//Routes

var router = new VueRouter ({
  routes: [

          { path : "/", component: NoUserPage },

          // { path: "/users", component: UsersIndexPage },
          // { path: "/users/nannies", component: UsersNanniesPage },
          // { path: "/users/signup", component: UsersNewPage },
          { path: "/profile", component: UserProfilePage},
          { path: "/users/:id", component: UsersShowPage },
          { path: '/users/:id/edit', component: UsersEditPage },
          { path: '/users/:id/delete', component: UsersDestroyPage },

          { path: "/", component: RequestsShowPage },
          // { path: "/requests", component: RequestsShowPage },
          { path: "/requests/new", component: RequestsNewPage },
          { path: "/requests/:id", component: RequestsShowPage },
          { path: '/requests/:id/edit', component: RequestsEditPage },
          { path: '/requests/:id/accept', component: RequestsAcceptPage },
          { path: '/requests/:id', component: RequestsDestroyPage},

          // { path: "/profiles/:currentUser", component: UsersShowPage}
          // { path: "/logged", component: LoggedInPage },
          { path: "/signup", component: SignupPage },
          { path: "/login", component: LoginPage },
          { path: "/logout", component: LogoutPage }
          ],
  scrollBehavior: function(to,from,savedPosition) {
    return { x: 0, y: 0 };
  }

});

var app = new Vue ({
  el: "#vue-app",
  router: router,
  data: function() {
    return{
      menuZipora:false
    }
  },
  created: function () {
    var jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
    }
  }
});
   









