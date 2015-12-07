/**
 *
 * Created by Josephine on 11/18/15.
 */
selloffers = "SellOffers";  // avoid typos, this string occurs many times.

SellOffers = new Mongo.Collection(selloffers);

Meteor.methods({
  /**
   * Invoked by AutoForm to create new buy offer record.
   * @param doc The Textbooks document.
   */
  addSellOffers: function(doc) {
    doc.creator = Meteor.user().profile.name;
    doc.accepted = false;
    check(doc, SellOffers.simpleSchema());
    SellOffers.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update offers record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editSellOffers: function(doc, docID) {
    check(doc, SellOffers.simpleSchema());
    SellOffers.update({_id: docID}, doc);
  },

  /**
   *
   * @param docID
   */
  deleteSellOffers: function(docID) {
    SellOffers.remove(docID);
  },

  acceptSellOffer: function(title) {
    SellOffers.update({creator: Meteor.user().profile.name, title:title}, {$set: {accepted: true}});
  }

});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(selloffers, function () {
    return SellOffers.find();
  });
}


/**
 * Create the schema for SellOffers
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
SellOffers.attachSchema(new SimpleSchema({

  title: {
    label: "Title",
    type: String,
    optional: false,
    autoform: {
      placeholder: "Title",
      options:function() {
        var buyOffers = BuyOffers.find({creator:Meteor.user().profile.name}).map(function(object){return object.title;});
        var currentOffers = SellOffers.find({creator: Meteor.user().profile.name}).map(function(object){return object.title;});
        var allTitles = Textbooks.find().map(function(object){return object.title;});

        var allowed = _.difference(allTitles, buyOffers, currentOffers);
        return allowed.map(function(doc){
          return {label: doc, value: doc};
        });
      }
    }
  },

  condition: {
    label: "Condition",
    type: String,
    optional: false,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor'],
    autoform:{
      placeholder: "Condition"
    }
  },

  price: {
    label: "Offer",
    type: Number,
    decimal: false,
    optional: false,
    autoform:{
      placeholder: "Offer"
    }
  },

  expiration: {
    label: "Expiration date/time",
    type: Date,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },

  creator:{
    type:String,
    optional:true
  },

  accepted:{
    type: Boolean,
    optional:true
  }
}));