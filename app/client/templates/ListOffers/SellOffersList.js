Template.SellOfferList.helpers({

  /**
   * Returns a list of sell offers
   * @returns {*}
   */
  sellOfferList: function () {
    return SellOffers.find({creator:Meteor.user().profile.name});
  },

  /**
   * Returns a list of associated buy matches
   * @returns {*}
   */
  listBuyMatches: function () {

    return BuyOffers.find({title: this.title, accepted: false});
  }
});
