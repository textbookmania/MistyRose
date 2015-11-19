/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() {
    return [Meteor.subscribe("Students"),
    Meteor.subscribe("Textbooks")];
  },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'StudentProfile'
});

Router.route('/add', {
  name: 'AddStudents'
});

Router.route('/addtextbook', {
  name: 'AddTextBooks'
});

Router.route('/admin', {
  name: 'ModerateTextBooks'
});

Router.route('/textbooks/:_id', {
  name: 'EditTextBooks',
  data: function() { return Textbooks.findOne(this.params._id); }
});

Router.route('/students/:_id', {
  name: 'EditStudents',
  data: function() { return Students.findOne(this.params._id); }
});


Router.route('/textbooks', {
  name: 'Textbooks',
});
