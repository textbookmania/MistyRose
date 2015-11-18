/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
var studentsSeeds = [
  {name: "Basket", quantity: 3},
  {name: "Bicycle", quantity: 2}
];

/**
 * Initialize the Students collection if empty with seed data.
 */
if (Students.find().count() === 0) {
  _.each(studentsSeeds,  function(students) {
    Students.insert(students);
  });
}
