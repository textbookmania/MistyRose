/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var studentsSeeds = [
  {first: "Corynne", last: "Umeda", email: "chumeda@hawaii.edu"},
];

/**
 * Initialize the Students collection if empty with seed data.
 */
if (Students.find().count() === 0) {
  _.each(studentsSeeds,  function(students) {
    Students.insert(students);
  });
}
