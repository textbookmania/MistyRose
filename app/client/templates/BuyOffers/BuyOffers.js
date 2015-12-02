AutoForm.hooks({
  BuyOfferForm: {
    /**
     * After successful form submission, go to the ListStuff page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('Home');
    }
  }
});


