'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

var listingData;

mongoose.connect(config.db.uri);

var listing = mongoose.model('Building', Listing.listingSchema)


fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err)
    throw err;
  var coordinates;

  listingData = data;
  listingData = JSON.parse(listingData);

  for(var entry in listingData.entries) {
    var json = {code: listingData.entries[entry].code, name: listingData.entries[entry].name, 
      coordinates: listingData.entries[entry].coordinates, address: listingData.entries[entry].address};
    var send_data = new listing(json);
    send_data.save();
  }
});

 