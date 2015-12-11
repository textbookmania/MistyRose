Template.ModerateTextBooks.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */


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

Template.AllBooks.helpers({
  listTextBooks: function () {
    var all = Textbooks.find({}).fetch();
    var chunk = [];

    var size = 2;

    while (all.length > size){
      chunk.push({row: all.slice(0, size)});
      all = all.slice(size);
    }
    chunk.push({row: all});
    return chunk;
  }
});

Template.bookElement.helpers({
  hasOffers: function () {
    return BuyOffers.find({title: this.title, accepted: false}).count() !== 0 || SellOffers.find({title: this.title, accepted: false}).count() !== 0;

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