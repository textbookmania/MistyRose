Template.StudentProfile.helpers({

  /**
   * @returns {*} All of the Students documents.
   */
  studentProfile: function () {
    return Students.find();
  }
});