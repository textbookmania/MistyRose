students = "Students";  // avoid typos, this string occurs many times.

Students = new Mongo.Collection(students);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Students record.
   * @param doc The Students document.
   */
  addStudents: function(doc) {
    check(doc, Students.simpleSchema());
    Students.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Students record.
   * @param doc The Students document.
   * @param docID It's ID.
   */
  editStudents: function(doc, docID) {
    check(doc, Students.simpleSchema());
    Students.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(students, function () {
    return Students.find();
  });
}


/**
 * Create the schema for Students
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Students.attachSchema(new SimpleSchema({
  name: {
    label: "Name",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: students,
      placeholder: "Bicycle"
    }
  },
  quantity: {
    label: "Quantity",
    type: Number,
    optional: false,
    autoform: {
      group: students,
      placeholder: "3"
    }
  }
}));
