Template.BuyOfferList.helpers({

  /**
   * Returns all of the current user's unaccepted buy offers
   * @returns {*}
   */
  buyOfferList: function () {
    return BuyOffers.find({creator:Meteor.user().profile.name, accepted: false});
  },

  /**
   * Returns the sell matches for a buy offer
   * @returns {*}
   */
  listSellMatches:function() {
    return SellOffers.find({title: this.title, accepted: false});
  }

});