/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/MyProfile', {
  name: 'StudentProfile'
});


Router.route('/EditProfile', {
  name: 'EditProfile',
});
