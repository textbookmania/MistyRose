Template.ListStudents.helpers({

  /**
   * @returns {*} All of the Students documents.
   */
  studentsList: function () {
    return Students.find();
  }
});