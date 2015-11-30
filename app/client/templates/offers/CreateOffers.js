AutoForm.hooks({
  CreateOfferForm: {
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

//var getTitleOptions = function(){
  //var options = [];

  //Textbooks.find().forEach(function(doc){
    //  options.push({label: doc.title, value:doc.title


    //});
  //});

  //return options;

//};