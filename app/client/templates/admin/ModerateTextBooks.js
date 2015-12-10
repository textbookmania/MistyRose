Template.ModerateTextBooks.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */

  hasOffers: function () {
    return BuyOffers.find({title: this.title, accepted: false}).count() !== 0 || SellOffers.find({title: this.title, accepted: false}).count() !== 0;

  },

  listTextBooks: function () {
    return Textbooks.find();
  },

  getBuyOffersCount: function (){
    return BuyOffers.find({title: this.title, accepted: false}).count();

  },

  getSellOffersCount: function (){
    return SellOffers.find({title: this.title, accepted: false}).count();
  },

  listAllBuyOffers: function(){
    return BuyOffers.find({title: this.title, accepted: false});
  },

  listAllSellOffers: function(){
    return SellOffers.find({title: this.title, accepted: false});
  }
});

Template.ModerateTextBooks.events({
  'click .deleteTextBook': function(e) {
    e.preventDefault();
    var currentContactId = this._id;
    var title =  this.title;


    /* Need to handle offers when associated textbook has been deleted.*/
    sweetAlert(
        {title: "Are you sure?",
          text: "This will delete the textbook record and associated offers.",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Yes, delete it!",
          closeOnConfirm: false},
        function(isConfirm){
          if(isConfirm) {
            sweetAlert("Deleted!", "Textbook and associated offers have been deleted.");
            Meteor.call("deleteTextbooks", currentContactId);
            Meteor.call("deleteAssociatedBuyOffers", title);
            Meteor.call("deleteAssociatedSellOffers", title);
            Router.go('ModerateTextBooks');
          }
        });
  },

  'click .editTextBook': function(e){
    e.preventDefault();
    Router.go('/textbooks/'+ this._id);
  }

});
