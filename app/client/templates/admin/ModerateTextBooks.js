Template.ModerateTextBooks.events({

  /**
   * Event function to delete a textbook and alert
   * @param e
   */
  'click .deleteTextBook': function(e) {
    e.preventDefault();
    var currentContactId = this._id;
    var title =  this.title;


    /* Need to handle offers when associated textbook has been deleted.*/
    sweetAlert(
        {title: "Are you sure?",
          text: "This will delete the textbook record and associated offers.",
          type: "warning",   showCancelButton: true,
          confirmButtonColor: "#E34777",
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

  /**
   * Event function to edit a textbook
   * @param e
   */
  'click .editTextBook': function(e){
    e.preventDefault();
    Router.go('/textbooks/'+ this._id);
  }

});

Template.AllBooks.helpers({

  /**
   * Returns an array of textbooks grouped by 2s
   * @returns {Array}
   */
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

  /**
   * Returns whether a textbook has an offer
   * @returns {boolean}
   */
  hasOffers: function () {
    return BuyOffers.find({title: this.title, accepted: false}).count() !== 0 || SellOffers.find({title: this.title, accepted: false}).count() !== 0;

  },

  /**
   * Returns the number of buy offers in the system
   * @returns {*}
   */
  getBuyOffersCount: function (){
    return BuyOffers.find({title: this.title, accepted: false}).count();

  },

  /**
   * Returns the number of sell offers in the system
   * @returns {*}
   */
  getSellOffersCount: function (){
    return SellOffers.find({title: this.title, accepted: false}).count();
  },

  /**
   * Returns all the buy offers for a book
   * @returns {*}
   */
  listAllBuyOffers: function(){
    return BuyOffers.find({title: this.title, accepted: false});
  },

  /**
   * Returns all the sell offers for a book
   * @returns {*}
   */
  listAllSellOffers: function(){
    return SellOffers.find({title: this.title, accepted: false});
  },

  isExpired: function (date) {
    var currDate = new Date();
    if (date.getTime() <= currDate.getTime()) {
      return true;
    }
    return false;
  }
});