AutoForm.hooks({
  SellOfferForm: {
    /**
     * After successful form submission, go to the ListStuff page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      sweetAlert("Offer has been added.");
      Router.go('Home');
    }
  }
});


