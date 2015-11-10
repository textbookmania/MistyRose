/* When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (!!Meteor.settings.defaultAccount) {
    Accounts.createUser({
      username: Meteor.settings.defaultAccount.username,
      password: Meteor.settings.defaultAccount.password
    });
  }
  else {
    console.log("No default user!  Please invoke meteor with a settings file.");
  }
}

*/

/* Validate username, sending a specific error message on failure. */
Accounts.validateNewUser(function (user) {
  console.log("validating new user: " + user);
  if (user) {
    var username = user.services.cas.id;
    console.log("validating username: " + username);
    console.log(Meteor.settings.allowed_users);
    if (username && _.contains(Meteor.settings.allowed_users,username)) {
      console.log("user allowed!")
      return true;
    }
  }
  console.log("user not allowed!");
  throw new Meteor.Error(403, "User not in the allowed list");
  //return false;
});