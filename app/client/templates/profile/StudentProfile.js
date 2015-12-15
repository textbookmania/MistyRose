AutoForm.hooks({

  "add-image": {
    /**
     * After successful form submission, go to home page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      sweetAlert("Profile has been updated.");
      Router.go('Home');
    }
  }
});


Template.StudentProfile.helpers({

  'getImageProfile': function () {
    return Images.find({user: Meteor.user().profile.name});
  }

});
