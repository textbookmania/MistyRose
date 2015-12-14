
Template.Home.helpers({

  'getImageProfile': function () {
    return Images.find({user: Meteor.user().profile.name});
  }

});
