Template.Matches.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  buyOfferList: function () {
    return BuyOffers.find({creator:Meteor.user().profile.name});
  },

  listSellMatches:function() {
    return SellOffers.find({title: this.title});
  },

  sellMatchesCount:function () {

    return SellOffers.find({title: this.title}).count();
  },


  sellOfferList: function () {
    return SellOffers.find({creator:Meteor.user().profile.name});
  },

  listBuyMatches: function () {

    return BuyOffers.find({title: this.title});
  },

  buyMatchesCount: function () {

    return BuyOffers.find({title: this.title}).count();
  }
});

Template.Matches.events({

  'click .editBuyOffer': function (e) {
    e.preventDefault();
    Router.go('/buyoffers/' + this._id);
  },

  'click .editSellOffer': function (e) {
    e.preventDefault();
    Router.go('/selloffers/' + this._id);
  },

  'click .deleteBuyOffer': function(e) {
    e.preventDefault();

    if (confirm("Delete this offer?")) {
      var offerId = this._id;
      Meteor.call("deleteBuyOffers", offerId);
      Router.go('Home');
    }
  },

  'click .deleteSellOffer': function(e) {
    e.preventDefault();

    if (confirm("Delete this book?")) {
      var offerId = this._id;
      Meteor.call("deleteSellOffers", offerId);
      Router.go('Home');
    }
  }

});


