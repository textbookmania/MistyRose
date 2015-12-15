/**
 *
 * Created by Josephine on 11/18/15.
 */
buyoffers = "BuyOffers";  // avoid typos, this string occurs many times.

BuyOffers = new Mongo.Collection(buyoffers);


Meteor.methods({
  /**
   * Invoked by AutoForm to create new buy offer record.
   * @param doc The Textbooks document.
   */
  addBuyOffers: function(doc) {
    doc.creator = Meteor.user().profile.name;
    doc.accepted = false;
    check(doc, BuyOffers.simpleSchema());

    BuyOffers.insert(doc);
  },
  /**
   * Invoked by AutoForm to update offers record.
   * @param doc The Textbooks document.
   * @param docID Its ID.
   */
  editBuyOffers: function(doc, docID) {
    check(doc, BuyOffers.simpleSchema());
    BuyOffers.update({_id: docID}, doc);
  },

  /**
   *Invoked by AutoForm to delete offers record.
   * @param docID Its ID.
   */
  deleteBuyOffers: function(docID) {
    BuyOffers.remove(docID);
  },

  /**
   * Function invoked to simulate accepting an offer.
   * Accepted condition is set to true and
   * the interested seller is defined.
   * @param docID The offer's ID
   * @param seller The name of the seller
   */
  acceptBuyOffer: function(docID, seller) {
    BuyOffers.update({_id: docID}, {$set: {accepted: true}});
    BuyOffers.update({_id: docID}, {$set: {seller: seller}});
  },

  /**
   * Function invoked to reverse acceptBuyOffer process.
   * @param title The title of the book
   * @param buyer The name of the buyer
   */
  cancelBuyOffer: function(title, buyer){
    BuyOffers.update({creator: buyer, title: title}, {$set: {accepted: false}});
    BuyOffers.update({creator: buyer, title: title}, {$unset: {seller: ""}});
  },

  /**
   * Function called in the process of deleting a textbook to remove
   * associated buy offers.
   * @param title The title of the book
   */
  deleteAssociatedBuyOffers: function(title){
    BuyOffers.remove({title: title});
  }

});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(buyoffers, function () {
    return BuyOffers.find();
  });
}


/**
 * Create the schema for BuyOffers
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
BuyOffers.attachSchema(new SimpleSchema({

  title: {
    label: "Title",
    type: String,
    optional: false,
    autoform: {
      placeholder: "Title",
      options:function() {

        var sellOffers = SellOffers.find({creator: Meteor.user().profile.name}).map(function(object){return object.title;});
        var currentOffers = BuyOffers.find({creator: Meteor.user().profile.name}).map(function(object){return object.title;});
        var allTitles = Textbooks.find().map(function(object){return object.title;});

        var allowed = _.difference(allTitles, sellOffers, currentOffers);
        return allowed.map(function(doc){
          return {label: doc, value: doc};
        });
      }
    }
  },

  condition:{
    label: "Condition",
    type: String,
    optional: true,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor', 'Any'],
    autoform:{
      placeholder: "Condition"
    }
  },

  price: {
    label: "Offer",
    type: Number,
    decimal:false,
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

  seller: {
    type:String,
    optional:true
  },

  expired: {
    type: Boolean,
    optional: true
  }

}));
