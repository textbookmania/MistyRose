# Textbook Exchange - MistyRose
by Josephine Garces, Michele Shimoda, and Corynne Umeda under the instruction of Dr. Philip Johnson.

## About
Textbook Exchange is a Meteor web application designed for ICS students at the University of Hawai'i at Manoa that allows them to exchange textbooks used in their curriculum.  The app is initialized with a listing of textbooks used in the ICS curriculum, as well as a few buying and selling offers.

## What you can do with it
Users of this app are able to:
 * *Sell a textbook:* Users can put up an offer to sell their textbook, given that it exists in the directory of textbooks.
 * *Buy a textbook:* Users can make an offer to buy a textbook that is on the list of books in the app.
 * *Contact potential buyers/sellers:* Users that opt to be contacted may be contacted by other users to complete the textbook exchange.

# Quick Start
## Background
Before diving into the application, you may want to familiarize yourself with [Meteor](https://www.meteor.com/).

For more information on the motivation behind this project, please see the [Textbook Exchange Requirements](http://philipmjohnson.github.io/ics314f15/morea/final-project/reading-textbookexchange.html).

## Basic Usage
* Download the latest version of the application at: https://github.com/textbookmania/MistyRose

* Invoke the application for the first time using:

```
meteor --settings ../config/settings.development.json
```

* In production, use

```
meteor --settings ../config/settings.production.json
```

*Note:* The settings file is needed to provide CAS parameter information. Note that you won't be able to successfully login until you edit the settings.development.json file to indicate that your UH account should be one of those allowed to login.

# Documentation
For the full documentation, please see the MistyRose Wiki.
# Miscellaneous
## Bugs and Issues
To file an issue, please see https://github.com/textbookmania/MistyRose/issues.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). For more information, please visit:
* Quick Summary: https://tldrlegal.com/license/mit-license
* Expanded Summary: https://en.wikipedia.org/wiki/MIT_License

## Credits
This application utilizes the [meteor-application-template](http://ics-software-engineering.github.io/meteor-application-template/).
