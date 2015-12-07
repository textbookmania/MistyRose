

var buyoffersSeeds = [
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN:"", condition:"Good", price:5, offerType:"Buy", creator:"Jack", accepted: false},
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN:"", condition:"Good", price:5, offerType:"Buy", creator:"jgarces", seller:"Jack", accepted: true},
  {title:"Discrete Mathematics and Its Applications Seventh Edition", ISBN:"", condition:"Excellent", price:10, offerType:"Buy", creator:"Jill", accepted: false},
  {title:"The C Programming Language", ISBN:"", condition:"Good", price:10, offerType:"Buy", creator:"Mary", accepted: false},
  {title:"Introduction to Algorithms, 3rd Edition", ISBN:"", condition:"Excellent", price:5, offerType:"Buy", creator:"Anne", accepted: false},
  {title:"Digital Logic Design: A Rigorous Approach", ISBN:"", condition:"Excellent", price:5, offerType:"Buy", creator:"Hillary", accepted: false},
  {title:"Ethics for the Information Age (5th Edition)", ISBN:"", condition:"Good", price:20, offerType:"Buy", creator:"Dawn", accepted: false},
  {title:"Artificial Intelligence for Games. CRC Press. 2009.", ISBN:"", condition:"Excellent", price:100, offerType:"Buy", creator:"Tracy", accepted: false},
  {title:"Programming Language Pragmatics, Third Edition", ISBN:"", condition:"Good", price:"250", offerType:"Buy", creator:"Stephanie", accepted: false}
];

var selloffersSeeds = [
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN:"", condition:"Good", price:"20", offerType:"Sell", creator:"Nick", accepted: false},
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN:"", condition:"Good", price:5, offerType:"Buy", creator:"Jack", accepted: true},
  {title:"Discrete Mathematics and Its Applications Seventh Edition", ISBN:"", condition:"Excellent", price:"100", offerType:"Sell", creator:"Sam", accepted: false},
  {title:"The C Programming Language", ISBN:"", condition:"Excellent", price:"25", offerType:"Sell", creator:"Karen", accepted: false},
  {title:"Introduction to Algorithms, 3rd Edition", ISBN:"", condition:"Good", price:"50", offerType:"Sell", creator:"Amber", accepted: false},
  {title:"Digital Logic Design: A Rigorous Approach", ISBN:"", condition:"Excellent", price:"100", offerType:"Sell", creator:"Sean", accepted: false},
  {title:"Ethics for the Information Age (5th Edition)", ISBN:"", condition:"Good", price:"25", offerType:"Sell", creator:"Zack", accepted: false},
  {title:"Artificial Intelligence for Games. CRC Press. 2009.", ISBN:"", condition:"Excellent", price:"75", offerType:"Sell", creator:"Sai", accepted: false},
  {title:"Programming Language Pragmatics, Third Edition", ISBN:"", condition:"Good", price:"1", offerType:"Sell", creator:"Lan", accepted: false}

];

if (BuyOffers.find().count() === 0 && SellOffers.find().count() === 0) {
  _.each(buyoffersSeeds, function(buyOffer) {
    BuyOffers.insert(buyOffer);
  });

  _.each(selloffersSeeds, function(sellOffer) {
    SellOffers.insert(sellOffer);
  });
}