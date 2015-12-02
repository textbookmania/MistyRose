/**
 * Created by Michele on 11/18/15.
 */


var textbooksSeeds = [
  {title: "Java Concepts: Compatible with Java 5, 6 and 7", author: "Cay S. Horstmann", ISBN: "9780470509470", cover: "http://images.amazon.com/images/P0470509473.01.LZ.jpg"},
  {title: "Discrete Mathematics and Its Applications Seventh Edition", author: "Kenneth Rosen", ISBN: "9780073383095", cover: "http://images.amazon.com/images/P0073383090.01.LZ.jpg"},
  {title: "Data Structures: Abstraction and Design Using Java", author: "Elliot B. Koffman", ISBN: "9780470128701", cover: "http://images.amazon.com/images/P0470128704.01.LZ.jpg"},
  {title: "C++ Primer Plus (6th Edition) (Developer's Library)", author: "Stephen Prata", ISBN: "9780321776402", cover: "http://images.amazon.com/images/P0321776402.01.LZ.jpg"},
  {title: "The C Programming Language", author: "Brian W. Kernighan", ISBN: "9780131103627", cover: "http://images.amazon.com/images/P0131103628.01.LZ.jpg"},
  {title: "Introduction to Algorithms, 3rd Edition", author: "Thomas H. Cormen", ISBN: "9780262033848", cover: "http://images.amazon.com/images/P0262033844.01.LZ.jpg"},
  {title: "Programming Language Pragmatics, Third Edition", author: "Michael L. Scott", ISBN: "9780123745149", cover: "http://images.amazon.com/images/P0123745144.01.LZ.jpg"},
  {title: "Land of Lisp: Learn to Program in Lisp, One Game at a Time!", author: "Conrad Barski", ISBN: "9781593272814", cover: "http://images.amazon.com/images/P1593272812.01.LZ.jpg"},
  {title: "Database Systems: The Complete Book (2nd Edition)", author: "Hector Garcia-Molina", ISBN: "9780131873254", cover: "http://images.amazon.com/images/P0131873253.01.LZ.jpg"},
  {title: "Digital Logic Design: A Rigorous Approach", author: "Guy Even", ISBN: "9781107027534", cover: "http://images.amazon.com/images/P1107027535.01.LZ.jpg"},
  {title: "Operating System Concepts", author: "Abraham Silberschatz", ISBN: "9781118063330", cover: "http://images.amazon.com/images/P1118063333.01.LZ.jpg"},
  {title: "Ethics for the Information Age (5th Edition)", author: "Michael J. Quinn", ISBN: "9780132855532", cover: "http://images.amazon.com/images/P0132855534.01.LZ.jpg"},
  {title: "Artificial Intelligence for Games. CRC Press. 2009.", author: "", ISBN: "9780123747310", cover: "http://images.amazon.com/images/P0123747317.01.LZ.jpg"}
];

if (Textbooks.find().count() === 0) {
  _.each(textbooksSeeds, function(textbooks) {
    Textbooks.insert(textbooks);
  });
}