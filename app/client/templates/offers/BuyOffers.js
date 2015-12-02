Template.BuyOffers.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  buyOfferList: function () {
    return BuyOffers.find({creator:Meteor.user().profile.name});
  }
});