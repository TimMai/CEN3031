/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  var building = mongoose.model('Building', Listing.listingSchema);
  var query = building.find({'name': 'Library West'});
  query.exec(function (err, buildings) {
    if (err)
      throw err;
    console.log(buildings);
  });
};

var removeCable = function() {
  var building = mongoose.model('Building', Listing.listingSchema);
  var query = building.find({'code': 'CABL'});
  query.exec(function (err, buildings) {
    if (err)
      throw err;
    console.log(buildings);
    query.remove().exec();
  });
};

var updatePhelpsLab = function() {
  //Retrieved address from https://campusmap.ufl.edu/#/index/0856
  var address = "1953 Museuem Rd, Gainseville, FL 32611, United States";
  var building = mongoose.model('Building', Listing.listingSchema);
  building.findOneAndUpdate({'name': 'Phelps Laboratory'}, {$set:{'address':address}}, {new: true}, function(err, doc) {
    if (err)
      throw err;
    console.log(doc);
  });
};

var retrieveAllListings = function() {;
  var building = mongoose.model('Building', Listing.listingSchema);
  var query = building.find();
  query.exec(function (err, buildings) {
    if (err)
      throw err;
    console.log(buildings);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
