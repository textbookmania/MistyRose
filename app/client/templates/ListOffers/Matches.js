Template.Matches.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  buyOfferList: function () {
    return BuyOffers.find({creator:Meteor.user().profile.name, accepted: false});
  },

  listSellMatches:function() {
    return SellOffers.find({title: this.title, accepted: false});
  },

  sellMatchesCount:function () {

    return SellOffers.find({title: this.title, accepted:false}).count();
  },


  sellOfferList: function () {
    return SellOffers.find({creator:Meteor.user().profile.name, accepted:false});
  },

  listBuyMatches: function () {

    return BuyOffers.find({title: this.title, accepted:false});
  },

  buyMatchesCount: function () {

    return BuyOffers.find({title: this.title, accepted:false}).count();
  },

  acceptedMessages: function() {

    return BuyOffers.find({creator: Meteor.user().profile.name, accepted: true});
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
    var offerId = this._id;
    sweetAlert(
        {title: "Are you sure?",
          text: "",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false},
        function(isConfirm){
          if(isConfirm) {
            sweetAlert("Deleted!", "Offer has been deleted.");
            Meteor.call("deleteBuyOffers", offerId);
          }
        });
  },

  'click .deleteSellOffer': function(e) {
    e.preventDefault();
    var offerId = this._id;
    sweetAlert(
        {title: "Are you sure?",
          text: "",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false},
        function(isConfirm){
          if(isConfirm) {
            sweetAlert("Deleted!", "Offer has been deleted.");
            Meteor.call("deleteSellOffers", offerId);
          }
        });
  },

  'click .acceptBuyOffer': function(e){
    e.preventDefault();
    if (confirm("Accept "+ this.creator +'s offer?')){
      var offerId = this._id;
      var offerTitle = this.title;
      var seller = Meteor.user().profile.name;
      Meteor.call("acceptBuyOffer", offerId, seller);
      Meteor.call("acceptSellOffer", offerTitle);
      Router.go('Home');
      window.location.reload();
    }
  }

});


