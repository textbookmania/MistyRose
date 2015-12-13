AutoForm.hooks({
  EditTextBookForm: {
    /**
     * After successful form submission, go to the ModerateTextBooks page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function(formType, result) {
      sweetAlert("Textbook record has been updated.");
      Router.go('ModerateTextBooks');
    }
  }
});
