const config = require('../config.js');
const request = require('request');


let getDistanceBetweenZipCodes = (origin, destination, callback) => {
  let unit = 'mile';
  let api_key = config.TOKEN ;
  let url = `https://www.zipcodeapi.com/rest/${api_key}/distance.json/${origin}/${destination}/${unit}`;
  let options = {
    uri: url,
  };
  request.get(options, (err, res, body) => {
    if (err) {
      console.log(err);
    } else {
      // console.log("this is the result from the API:", body);
     callback(body);
    };
  });

}

module.exports.getDistanceBetweenZipCodes = getDistanceBetweenZipCodes;