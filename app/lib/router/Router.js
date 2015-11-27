/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() {
    return [Meteor.subscribe("Textbooks")];
  },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/MyProfile', {
  name: 'StudentProfile'
});


Router.route('/EditProfile', {
  name: 'EditProfile'
});

Router.route('/Textbooks', {
  name: 'ModerateTextBooks'
});


Router.route('/AddTextbook', {
  name: 'AddTextBooks'
});

Router.route('/textbooks/:_id', {
  name: 'EditTextBooks',
  data: function() { return Textbooks.findOne(this.params._id); }
});

