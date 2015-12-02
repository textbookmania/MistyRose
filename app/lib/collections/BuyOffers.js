/**
 *
 * Created by Josephine on 11/18/15.
 */
buyoffers = "BuyOffers";  // avoid typos, this string occurs many times.

BuyOffers = new Mongo.Collection(buyoffers);

Meteor.methods({
  /**
   * Invoked by AutoForm to create new sell offer record.
   * @param doc The Textbooks document.
   */
  addBuyOffers: function(doc) {
    doc.creator = Meteor.user().username;
    check(doc, BuyOffers.simpleSchema());
    BuyOffers.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update offers record.
   * @param doc The Textbooks document.
   * @param docID It's ID.
   */
  editBuyOffers: function(doc, docID) {
    check(doc, BuyOffers.simpleSchema());
    BuyOffers.update({_id: docID}, doc);
  },

  /**
   *
   * @param docID
   */
  deleteBuyOffers: function(docID) {
    BuyOffers.remove(docID);
  },

  /**
   *
   * @param doc
   */
  createOffer: function(doc){
    doc.creator = Meteor.user().profile.name;
    if (doc.offerType === 'Buy'){
      check(doc, BuyOffers.simpleSchema());
      BuyOffers.insert(doc);
    }else if(doc.offerType === 'Sell'){
      check(doc, SellOffers.simpleSchema());
      SellOffers.insert(doc);
    }
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
        return Textbooks.find().map(function(doc){
          return {label: doc.title, value: doc.title};
        });
      }
    }
  },

  condition:{
    label: "Condition",
    type: String,
    optional: true,
    allowedValues: ['Excellent', 'Good', 'Fair', 'Poor'],
    autoform:{
      placeholder: "Condition"
    }
  },

  price: {
    label: "Offer",
    type: Number,
    optional: false,
    autoform:{
      placeholder: "Offer"
    }
  },

  expiration: {
    label: "Expiration date/time",
    type: Date,
    optional: false,
    autoform: {
      afFieldInput: {
        type: "bootstrap-datetimepicker"
      }
    }
  },

  offerType:{
    type:String,
    optional:true,
    allowedValues:['Buy', 'Sell'],
    autoform:{
      placeholder: "Buy or Sell?"
    }
  },

  creator:{
    type:String,
    optional:true
  }


}));
