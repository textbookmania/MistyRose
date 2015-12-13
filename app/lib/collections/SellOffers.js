/**
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
   * Invoked to delete offers record.
   * @param docID
   */
  deleteSellOffers: function(docID) {
    SellOffers.remove(docID);
  },

  /**
   * Invoked to accept sell offer.
   * Sell offer condition is set to true,
   * and the buyer's name is recorded.
   * @param title
   * @param buyer
   */
  acceptSellOffer: function(title, buyer) {
    SellOffers.update({title: title, creator: Meteor.user().profile.name}, {$set: {accepted: true}});
    SellOffers.update({title: title, creator: Meteor.user().profile.name}, {$set: {buyer: buyer}});
  },

  /**
   * Reverse process of accepting a sell offer.
   * @param title
   */
  cancelSellOffer: function(title){
    SellOffers.update({title:title, creator: Meteor.user().profile.name}, {$set: {accepted: false}});
    SellOffers.update({title: title, creator: Meteor.user().profile.name}, {$unset: {buyer: ""}});
  },

  /**
   * Function called in the process of deleting a textbook to remove
   * associated sell offers.
   * @param title
   */
  deleteAssociatedSellOffers: function(title){
    SellOffers.remove({title: title});
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
  },

  buyer: {
    type:String,
    optional:true
  }
}));
