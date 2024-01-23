//promises
function isAuthenticated() {
    return Math.random() > 1;
  }
  function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
}
Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });

//PROMISE
//location eg
function isLocationValid(loc) {
    var validLocation = "Trichy";
    return loc === validLocation;
    }
      
    function location() {
        return new Promise((resolve, reject)=>{
          setTimeout(function () {
            var loc = "Trichy";
            console.log(loc);
            if (isLocationValid(loc)) {
              resolve("Location found");
            } else {
              reject("Location not found");
            }
        }, 2000);
    });
}
      
location()
    .then((response) =>{
    console.log(response);
    })
    .catch((errorMessage) =>{
        console.log(errorMessage);
    });
    

