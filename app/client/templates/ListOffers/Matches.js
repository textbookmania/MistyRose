/**
 *
 */
Template.Matches.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  buyOfferList: function () {
    return BuyOffers.find({creator:Meteor.user().profile.name, accepted: false});
  },

  /**
   *
   * @returns {*}
   */
  listSellMatches:function() {
    if (this.condition === "Any"){
      return SellOffers.find({title: this.title, accepted: false});
    }else{
      return SellOffers.find({title: this.title, condition: this.condition, accepted: false});
    }
  },

  /**
   *
   * @returns {*}
   */
  sellMatchesCount:function () {
    if (this.condition === "Any"){
      return SellOffers.find({title: this.title, accepted: false}).count();
    }else{
      return SellOffers.find({title: this.title, condition: this.condition, accepted: false}).count();
    }
  },

  /**
   *
   * @returns {boolean}
   */
  hasSellMatches: function(){
    return SellOffers.find({title: this.title, accepted:false}).count() !== 0;
  },


  /**
   *
   * @returns {*}
   */
  sellOfferList: function () {
    return SellOffers.find({creator:Meteor.user().profile.name, accepted:false});
  },

  /**
   *
   * @returns {*}
   */
  listBuyMatches: function () {

    return BuyOffers.find({title: this.title, $or: [{condition: this.condition},{condition: "Any"}], accepted: false});

  },

  /**
   *
   * @returns {*}
   */
  buyMatchesCount: function () {

    return BuyOffers.find({title: this.title, $or: [{condition: this.condition},{condition: "Any"}], accepted: false}).count();
  },

  /**
   *
   * @returns {boolean}
   */
  hasBuyMatches: function (){
      return BuyOffers.find({title: this.title, accepted:false}).count() !== 0;
  },

  /**
   *
   * @returns {*}
   */
  acceptedMessages: function() {

    return BuyOffers.find({creator: Meteor.user().profile.name, accepted: true});
  },


  /**
   *
   * @returns {*}
   */
  acceptedBuyOffers: function() {
    return SellOffers.find({creator: Meteor.user().profile.name, accepted: true});
  }
});

Template.Matches.events({

  /**
   *
   * @param e
   */
  'click .editBuyOffer': function (e) {
    e.preventDefault();
    Router.go('/buyoffers/' + this._id);
  },

  /**
   *
   * @param e
   */
  'click .editSellOffer': function (e) {
    e.preventDefault();
    Router.go('/selloffers/' + this._id);
  },

  /**
   *
   * @param e
   */
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

  /**
   *
   * @param e
   */
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

  /**
   *
   * @param e
   */
  'click .acceptBuyOffer': function(e){
    e.preventDefault();
    var offerId = this._id;
    var offerTitle = this.title;
    var buyer = this.creator;
    var seller = Meteor.user().profile.name;

    sweetAlert(
        {title: "Accept "+ this.creator +"s offer?",
          text: "",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Accept",
          closeOnConfirm: false},
        function(isConfirm){
          if(isConfirm) {
            Meteor.call("acceptBuyOffer", offerId, seller);
            Meteor.call("acceptSellOffer", offerTitle, buyer);
            Router.go('Home');
            window.location.reload();
          }
        });
  },

  'click .cancelAccepted': function(e){
    e.preventDefault();
    var offerTitle = this.title;
    var buyer = this.buyer;

    sweetAlert(
        {title: "Cancel this transaction?",
          text: "",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Accept",
          closeOnConfirm: false},
        function(isConfirm){
          if(isConfirm) {
            Meteor.call("cancelBuyOffer", offerTitle, buyer);
            Meteor.call("cancelSellOffer", offerTitle);
            Router.go('Home');
            window.location.reload();
          }
        });
  }

});


