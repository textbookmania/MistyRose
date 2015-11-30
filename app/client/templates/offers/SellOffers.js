Template.SellOffers.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  sellOfferList: function () {
    return SellOffers.find({creator:Meteor.user().profile.name});
  }
});