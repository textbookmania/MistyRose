Template.ModerateTextBooks.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  listTextBooks: function () {
    return Textbooks.find();
  }
});

Template.ModerateTextBooks.events({
  'click .deleteTextBook': function(e) {
    e.preventDefault();

    if (confirm("Delete this book?")) {
      var currentContactId = this._id;
      Meteor.call("deleteTextbooks", currentContactId);
      Router.go('ModerateTextBooks');
    }
  }

})