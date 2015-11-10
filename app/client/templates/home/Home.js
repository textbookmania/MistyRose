Template.Home.helpers({
  login_error: function() {
    return Session.get("login_error");
  }
});

// handle the CAS Login
casLogin = function() {
  var callback = function loginCallback(error){
    console.log("in login callback");
    if (error) {
      console.log(error);
      Session.set("login_error", error.reason);
    }
  };

  Meteor.loginWithCas(callback);
  return false;
};