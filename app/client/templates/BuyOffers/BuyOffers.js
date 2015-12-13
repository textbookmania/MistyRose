AutoForm.hooks({
  BuyOfferForm: {
    /**
     * After successful form submission, go to home page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      sweetAlert("Offer has been added.");
      Router.go('Home');
    }
  }
});


