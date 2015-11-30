/**
 * Created by Michele on 11/18/15.
 */


var textbooksSeeds = [
  {title: "Java Concepts: Compatible with Java 5, 6 and 7", author: "Cay S. Horstmann", ISBN: "9780470509470"},
  {title: "Discrete Mathematics and Its Applications Seventh Edition", author: "Kenneth Rosen", ISBN: "9780073383095"},
  {title: "Data Structures: Abstraction and Design Using Java", author: "Elliot B. Koffman", ISBN: "9780470128701"},
  {title: "C++ Primer Plus (6th Edition) (Developer's Library)", author: "Stephen Prata", ISBN: "9780321776402"},
  {title: "The C Programming Language", author: "Brian W. Kernighan", ISBN: "9780131103627"},
  {title: "Introduction to Algorithms, 3rd Edition", author: "Thomas H. Cormen", ISBN: "9780262033848"},
  {title: "Programming Language Pragmatics, Third Edition", author: "Michael L. Scott", ISBN: "978-0123745149"},
  {title: "Land of Lisp: Learn to Program in Lisp, One Game at a Time!", author: "Conrad Barski", ISBN: "978-1-59327-281-4"},
  {title: "Database Systems: The Complete Book (2nd Edition)", author: "Hector Garcia-Molina", ISBN: "9780131873254"},
  {title: "Digital Logic Design: A Rigorous Approach", author: "Guy Even", ISBN: "9781107027534"},
  {title: "Operating System Concepts", author: "Abraham Silberschatz", ISBN: "9781118063330"},
  {title: "Ethics for the Information Age (5th Edition)", author: "Michael J. Quinn", ISBN: "9780132855532"},
  {title: "Artificial Intelligence for Games. CRC Press. 2009.", author: "", ISBN: "9780123747310"}
];

if (Textbooks.find().count() === 0) {
  _.each(textbooksSeeds, function(textbooks) {
    Textbooks.insert(textbooks);
  });
}