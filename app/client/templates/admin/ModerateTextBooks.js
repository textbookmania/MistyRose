Template.ModerateTextBooks.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */

  hasOffers: function () {
    return BuyOffers.find({title: this.title}).count() !== 0 || SellOffers.find({title: this.title}).count() !== 0;

  },

  listTextBooks: function () {
    return Textbooks.find();
  },

  getBuyOffersCount: function (){
    return BuyOffers.find({title: this.title}).count();

  },

  getSellOffersCount: function (){
    return SellOffers.find({title: this.title}).count();
  },

  listAllBuyOffers: function(){
    return BuyOffers.find({title: this.title});
  },

  listAllSellOffers: function(){
    return SellOffers.find({title: this.title});
  }
});

Template.ModerateTextBooks.events({
  'click .deleteTextBook': function(e) {
    e.preventDefault();

    if (confirm("Delete this book?")) {
      var currentContactId = this._id;
      Meteor.call("deleteTextbooks", currentContactId);
      Router.go('ModerateTextBooks');
    }
  },

  'click .editTextBook': function(e){
    e.preventDefault();
    Router.go('/textbooks/'+ this._id);
  }

});