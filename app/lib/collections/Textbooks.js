/**
 * Created by Michele on 11/18/15.
 */
textbooks = "Textbooks";  // avoid typos, this string occurs many times.

Textbooks = new Mongo.Collection(textbooks);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Textbooks record.
   * @param doc The Textbooks document.
   */
  addTextbooks: function(doc) {
    check(doc, Textbooks.simpleSchema());
    Textbooks.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Textbooks record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editTextbooks: function(doc, docID) {
    check(doc, Textbooks.simpleSchema());
    Textbooks.update({_id: docID}, doc);
  },
  deleteTextbooks: function(docID) {
    Textbooks.remove(docID);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(textbooks, function () {
    return Textbooks.find();
  });
}


/**
 * Create the schema for Textbooks
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Textbooks.attachSchema(new SimpleSchema({
  title: {
    label: "Title",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: textbooks,
      placeholder: "Name of textbook"
    }
  },
  author: {
    label: "Author",
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: textbooks,
      placeholder: "Name of author (first and last)"
    }
  },
  ISBN: {
    label: "ISBN",
    type: String,
    optional: false,
    max: 50,
    autoform: {
      group: textbooks,
      placeholder: "ISBN"
    }
  }

}));
