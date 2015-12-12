/**
 *
 * Created by Michele on 11/18/15.
 */


var textbooksSeeds = [
  {title: "Java Concepts: Compatible with Java 5, 6 and 7", author: "Cay S. Horstmann", ISBN10: "0470509473", ISBN13: "9780470509470", cover: "http://images.amazon.com/images/P0470509473.01.LZ.jpg"},

  {title: "Discrete Mathematics and Its Applications Seventh Edition", author: "Kenneth Rosen", ISBN10: "0073383090", ISBN13: "9780073383095", cover: "http://images.amazon.com/images/P0073383090.01.LZ.jpg"},

  {title: "Data Structures: Abstraction and Design Using Java", author: "Elliot B. Koffman", ISBN10: "0470128704", ISBN13: "9780470128701", cover: "http://images.amazon.com/images/P0470128704.01.LZ.jpg"},

  {title: "C++ Primer Plus (6th Edition) (Developer's Library)", author: "Stephen Prata", ISBN10: "0321776402", ISBN13: "9780321776402", cover: "http://images.amazon.com/images/P0321776402.01.LZ.jpg"},

  {title: "The C Programming Language", author: "Brian W. Kernighan", ISBN10: "0131103628", ISBN13: "9780131103627", cover: "http://images.amazon.com/images/P0131103628.01.LZ.jpg"},

  {title: "Introduction to Algorithms, 3rd Edition", author: "Thomas H. Cormen", ISBN10: "0262033844", ISBN13: "9780262033848", cover: "http://images.amazon.com/images/P0262033844.01.LZ.jpg"},

  {title: "Programming Language Pragmatics, Third Edition", author: "Michael L. Scott", ISBN10: "0123745144", ISBN13: "9780123745149", cover: "http://images.amazon.com/images/P0123745144.01.LZ.jpg"},

  {title: "Land of Lisp: Learn to Program in Lisp, One Game at a Time!", author: "Conrad Barski", ISBN10: "1593272812", ISBN13: "9781593272814", cover: "http://images.amazon.com/images/P1593272812.01.LZ.jpg"},

  {title: "Database Systems: The Complete Book (2nd Edition)", author: "Hector Garcia-Molina", ISBN10: "0131873253", ISBN13: "9780131873254", cover: "http://images.amazon.com/images/P0131873253.01.LZ.jpg"},

  {title: "Digital Logic Design: A Rigorous Approach", author: "Guy Even", ISBN10: "1107027535", ISBN13: "9781107027534", cover: "http://images.amazon.com/images/P1107027535.01.LZ.jpg"},

  {title: "Operating System Concepts", author: "Abraham Silberschatz", ISBN10: "1118063333", ISBN13: "9781118063330", cover: "http://images.amazon.com/images/P1118063333.01.LZ.jpg"},

  {title: "Ethics for the Information Age (5th Edition)", author: "Michael J. Quinn", ISBN10: "0132855534", ISBN13: "9780132855532", cover: "http://images.amazon.com/images/P0132855534.01.LZ.jpg"},

  {title: "Artificial Intelligence for Games. CRC Press. 2009.", author: "Ian Millington", ISBN10: "0123747317", ISBN13: "9780123747310", cover: "http://images.amazon.com/images/P0123747317.01.LZ.jpg"}
];

if (Textbooks.find().count() === 0) {
  _.each(textbooksSeeds, function(textbooks) {
    Textbooks.insert(textbooks);
  });
}