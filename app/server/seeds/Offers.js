

var buyoffersSeeds = [
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN:"", condition:"Good", price:5, offerType:"Buy", creator:"Jack"},
  {title:"Discrete Mathematics and Its Applications Seventh Edition", ISBN:"", condition:"Excellent", price:10, offerType:"Buy", creator:"Jill"},
  {title:"The C Programming Language", ISBN:"", condition:"Good", price:10, offerType:"Buy", creator:"Mary"},
  {title:"Introduction to Algorithms, 3rd Edition", ISBN:"", condition:"Excellent", price:5, offerType:"Buy", creator:"Anne"},
  {title:"Digital Logic Design: A Rigorous Approach", ISBN:"", condition:"Excellent", price:5, offerType:"Buy", creator:"Hillary"},
  {title:"Ethics for the Information Age (5th Edition)", ISBN:"", condition:"Good", price:20, offerType:"Buy", creator:"Dawn"},
  {title:"Artificial Intelligence for Games. CRC Press. 2009.", ISBN:"", condition:"Excellent", price:100, offerType:"Buy", creator:"Tracy"},
  {title:"Programming Language Pragmatics, Third Edition", ISBN:"", condition:"Good", price:"250", offerType:"Buy", creator:"Stephanie"}
];

var selloffersSeeds = [
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN:"", condition:"Good", price:"20", offerType:"Sell", creator:"Nick"},
  {title:"Discrete Mathematics and Its Applications Seventh Edition", ISBN:"", condition:"Excellent", price:"100", offerType:"Sell", creator:"Sam"},
  {title:"The C Programming Language", ISBN:"", condition:"Excellent", price:"25", offerType:"Sell", creator:"Karen"},
  {title:"Introduction to Algorithms, 3rd Edition", ISBN:"", condition:"Good", price:"50", offerType:"Sell", creator:"Amber"},
  {title:"Digital Logic Design: A Rigorous Approach", ISBN:"", condition:"Excellent", price:"100", offerType:"Sell", creator:"Sean"},
  {title:"Ethics for the Information Age (5th Edition)", ISBN:"", condition:"Good", price:"25", offerType:"Sell", creator:"Zack"},
  {title:"Artificial Intelligence for Games. CRC Press. 2009.", ISBN:"", condition:"Excellent", price:"75", offerType:"Sell", creator:"Sai"},
  {title:"Programming Language Pragmatics, Third Edition", ISBN:"", condition:"Good", price:"1", offerType:"Sell", creator:"Lan"}

];

if (BuyOffers.find().count() === 0 && SellOffers.find().count() === 0) {
  _.each(buyoffersSeeds, function(buyOffer) {
    BuyOffers.insert(buyOffer);
  });

  _.each(selloffersSeeds, function(sellOffer) {
    SellOffers.insert(sellOffer);
  });
}