/*Code from Team LightSteelBlue*/

Meteor.publish('userData', function () {
  return Meteor.users.find({}, {fields: {profile: 1}});
});

Meteor.methods({

});
