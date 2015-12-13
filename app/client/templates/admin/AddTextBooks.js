AutoForm.hooks({
  AddTextBookForm: {
    /**
     * After successful form submission, go to the ModerateTextBooks page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      Router.go('ModerateTextBooks');
    }
  }
});