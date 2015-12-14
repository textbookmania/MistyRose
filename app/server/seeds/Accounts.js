/**
 *
 */
Meteor.publish(null, function (){
  return Meteor.roles.find({});
});


/**
 *
 */
Accounts.validateNewUser(function (user) {
  if (user) {
    var userId = user._id;
    var username = user.services.cas.id;
    if (username && _.contains(Meteor.settings.allowedUsers, username)) {

      var handle = Meteor.users.find({_id: userId}, {fields: {_id: 1}}).observe({
        added: function () {
          if (_.contains(Meteor.settings.adminUsers, user.services.cas.id)) {
            Roles.addUsersToRoles(userId, ['admin']);
            handle.stop();
            handle = null;
          }else{
            Roles.addUsersToRoles(userId, ['student']);
          }

          Meteor.users.update({_id: userId}, {$set: {"profile.email": username + "@hawaii.edu"}});
          //Meteor.users.update({_id: userId}, {$set: {"profile.profileImage": "http://i.imgur.com/Bkj4Rln.png"}});
          Images.insert({image:"http://i.imgur.com/Bkj4Rln.png", user: username, firstName:"", lastName: ""});

        }
      });

      return true;
    }
  }
  throw new Meteor.Error(403, "User not in the allowed list");
});

