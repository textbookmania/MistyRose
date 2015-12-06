Template.BuyOfferList.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  buyOfferList: function () {
    return BuyOffers.find({creator:Meteor.user().profile.name});
  },

  listSellMatches:function() {
    return SellOffers.find({title: this.title});
  }

});