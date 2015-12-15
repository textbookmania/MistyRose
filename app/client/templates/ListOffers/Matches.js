Template.Matches.helpers({

  /**
   * Returns all of the current user's unaccepted buy offers
   * @returns {*} All of the Stuff documents.
   */
  buyOfferList: function () {
    return BuyOffers.find({creator:Meteor.user().profile.name, accepted: false});
  },

  /**
   * Returns the sell matches for a buy offer
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
   * Returns the count of sell matches
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
   * Returns true or false if the user has any sell matches
   * @returns {boolean}
   */
  hasSellMatches: function(){
    return SellOffers.find({title: this.title, accepted:false}).count() !== 0;
  },


  /**
   * Returns all of the current user's unaccepted sell offers
   * @returns {*}
   */
  sellOfferList: function () {
    return SellOffers.find({creator:Meteor.user().profile.name, accepted:false});
  },

  /**
   * Returns the sell matches for a buy offer
   * @returns {*}
   */
  listBuyMatches: function () {

    return BuyOffers.find({title: this.title, $or: [{condition: this.condition},{condition: "Any"}], accepted: false});

  },

  /**
   * Returns the count of buy matches
   * @returns {*}
   */
  buyMatchesCount: function () {

    return BuyOffers.find({title: this.title, $or: [{condition: this.condition},{condition: "Any"}], accepted: false}).count();
  },

  /**
   * Returns true or false if the user has any buy matches
   * @returns {boolean}
   */
  hasBuyMatches: function (){
      return BuyOffers.find({title: this.title, accepted:false}).count() !== 0;
  },

  /**
   * Returns the list of accepted books to be associated with a message
   * @returns {*}
   */
  acceptedMessages: function() {

    return BuyOffers.find({creator: Meteor.user().profile.name, accepted: true});
  },


  /**
   * Returns a list of accepted offers
   * @returns {*}
   */
  acceptedBuyOffers: function() {
    return SellOffers.find({creator: Meteor.user().profile.name, accepted: true});
  },

  checkDate: function (date) {
    console.log(this);
    var currDate = new Date();
    var newDate = moment(date).format('ll, h:mm a');
    if (date <= currDate) {
      return newDate;
    }
    return newDate;
  },

  isExpired: function (date) {
    var currDate = new Date();
    if (date.getTime() <= currDate.getTime()) {
      return true;
    }
    return false;
  }
});

Template.Matches.events({

  /**
   * Event function to edit a buy offer
   * @param e
   */
  'click .editBuyOffer': function (e) {
    e.preventDefault();
    Router.go('/buyoffers/' + this._id);
  },

  /**
   * Event function to edit a sell offer
   * @param e
   */
  'click .editSellOffer': function (e) {
    e.preventDefault();
    Router.go('/selloffers/' + this._id);
  },

  /**
   * Event function to delete a buy offer
   * @param e
   */
  'click .deleteBuyOffer': function(e) {
    e.preventDefault();
    var offerId = this._id;
    sweetAlert(
        {title: "Are you sure?",
          text: "",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#E34777",
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
   * Event function to delete a sell offer
   * @param e
   */
  'click .deleteSellOffer': function(e) {
    e.preventDefault();
    var offerId = this._id;
    sweetAlert(
        {title: "Are you sure?",
          text: "",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#E34777",
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
   * Event function to accepted a buy offer
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
          confirmButtonColor: "#E34777",
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


  /**
   * Event function to cancel an accepted offer
   * @param e
   */
  'click .cancelAccepted': function(e){
    e.preventDefault();
    var offerTitle = this.title;
    var buyer = this.buyer;

    sweetAlert(
        {title: "Cancel this transaction?",
          text: "",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#E34777",
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

UI.registerHelper("localizedDateAndTime", function(date) {
  if(date) {
    return moment(date).format('l LT'); // shorthand for localized format "5/23/2014 3:47 PM"
  }
});
