Images = new Mongo.Collection('Images');

Images.attachSchema(new SimpleSchema({
  image: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'cloudinary'
      }
    }
  },

  user:{
    type: String,
    optional: true
  },

  firstName:{
    type: String,
    optional: true
  },


  lastName:{
    type: String,
    optional: true
  },

  contact:{
    type: Boolean,
    optional: true,
    label: "Contact Me"
  }

}));

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish('Images', function () {
    return Images.find();
  });
}

Meteor.methods({

  insertImage: function(doc){
    doc.user = Meteor.user().profile.name;
    Images.insert(doc);
  },

  editImage: function(doc){
    check(doc, Images.simpleSchema());
    Images.update({user: Meteor.user().profile.name}, {$set: {firstName: doc.firstName}}, {validate: false});
    Images.update({user: Meteor.user().profile.name}, {$set: {lastName: doc.lastName}}, {validate: false});
    Images.update({user: Meteor.user().profile.name}, {$set: {image: doc.image}}, {validate: false});
    Images.update({user: Meteor.user().profile.name}, {$set: {contact: doc.contact}}, {validate: false});
  }

});