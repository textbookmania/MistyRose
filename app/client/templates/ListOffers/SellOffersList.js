Template.SellOfferList.helpers({

  sellOfferList: function () {
    return SellOffers.find({creator:Meteor.user().profile.name});
  },

  listBuyMatches: function () {

    return BuyOffers.find({title: this.title});
  }
});
