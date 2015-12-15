



var buyoffersSeeds = [
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN10: "", ISBN13:"", condition:"Good", price:5, offerType:"Buy", creator:"jgarces", accepted: false, expiration: new Date('December 17, 1995 03:24:00')},

  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN10:"", ISBN13: "", condition:"Good", price:5, offerType:"Buy", creator:"mkshimod", seller:"Jack", accepted: true, expiration: new Date('January 20, 2016 17:44:00')},

  {title:"Discrete Mathematics and Its Applications Seventh Edition", ISBN10:"", ISBN13: "", condition:"Excellent", price:10, offerType:"Buy", creator:"mkshimod", accepted: false, expiration: new Date('December 15, 2015 05:34:00')},

  {title:"The C Programming Language", ISBN10: "", ISBN13: "", condition:"Good", price:10, offerType:"Buy", creator:"mkshimod", accepted: false, expiration: new Date('December 17, 2015 15:00:00')},

  {title:"Introduction to Algorithms, 3rd Edition", ISBN10: "", ISBN13: "", condition:"Excellent", price:5, offerType:"Buy", creator:"mkshimod", accepted: false, expiration: new Date('December 15, 2015 19:30:00')},

  {title:"Digital Logic Design: A Rigorous Approach", ISBN10: "", ISBN13: "", condition:"Excellent", price:5, offerType:"Buy", creator:"mkshimod", accepted: false, expiration: new Date('December 16, 2015 15:00:00')},

  {title:"Ethics for the Information Age (5th Edition)", ISBN10:"", ISBN13: "", condition:"Good", price:20, offerType:"Buy", creator:"jgarces", accepted: false, expiration: new Date('December 20, 2015 00:00:00')},

  {title:"Artificial Intelligence for Games. CRC Press. 2009.", ISBN10: "", ISBN13: "", condition:"Excellent", price:100, offerType:"Buy", creator:"chumeda", accepted: false, expiration: new Date('December 25, 2015 00:00:00')},

  {title:"Programming Language Pragmatics, Third Edition", ISBN10: "", ISBN13: "", condition:"Good", price:"250", offerType:"Buy", creator:"chumeda", accepted: false, expiration: new Date('December 15, 2015 01:34:00')}
];

var selloffersSeeds = [
  {title:"Java Concepts: Compatible with Java 5, 6 and 7", ISBN10: "", ISBN13: "", condition:"Good", price:"20", offerType:"Sell", creator:"chumeda", accepted: false, expiration: new Date('December 15, 2015 05:34:00')},
  {title:"Discrete Mathematics and Its Applications Seventh Edition", ISBN10: "", ISBN13: "", condition:"Excellent", price:"100", offerType:"Sell", creator:"chumeda", accepted: false, expiration: new Date('December 31, 2015 11:00:00')},
  {title:"The C Programming Language", ISBN10: "", ISBN13: "", condition:"Excellent", price:"25", offerType:"Sell", creator:"chumeda", accepted: false, expiration: new Date('February 10, 2015 00:30:00')},
  {title:"Introduction to Algorithms, 3rd Edition", ISBN10: "", ISBN13: "", condition:"Good", price:"50", offerType:"Sell", creator:"chumeda", accepted: false, expiration: new Date('December 15, 2015 05:34:00')},
  {title:"Digital Logic Design: A Rigorous Approach", ISBN10: "", ISBN13: "", condition:"Excellent", price:"100", offerType:"Sell", creator:"chumeda", accepted: false, expiration: new Date('December 20, 2015 05:34:00')},
  {title:"Ethics for the Information Age (5th Edition)", ISBN10:"", ISBN13: "", condition:"Good", price:"25", offerType:"Sell", creator:"mkshimod", accepted: false, expiration: new Date('December 15, 2015 11:34:00')},
  {title:"Artificial Intelligence for Games. CRC Press. 2009.", ISBN10:"", ISBN13: "", condition:"Excellent", price:"75", offerType:"Sell", creator:"mkshimod", accepted: false, expiration: new Date('December 20, 2015 05:34:00')},
  {title:"Programming Language Pragmatics, Third Edition", ISBN10: "", ISBN13: "", condition:"Good", price:"1", offerType:"Sell", creator:"mkshimod", accepted: false, expiration: new Date('December 15, 2015 05:34:00')}

];

if (BuyOffers.find().count() === 0 && SellOffers.find().count() === 0) {
  _.each(buyoffersSeeds, function(buyOffer) {
    BuyOffers.insert(buyOffer);
  });

  _.each(selloffersSeeds, function(sellOffer) {
    SellOffers.insert(sellOffer);
  });
}