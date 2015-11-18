/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Students"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStudents'
});

Router.route('/add', {
  name: 'AddStudents'
});


Router.route('/students/:_id', {
  name: 'EditStudents',
  data: function() { return Students.findOne(this.params._id); }
});
