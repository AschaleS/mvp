const express = require('express');
const bodyParser = require('body-parser');
const { getDistanceBetweenZipCodes } = require('../helpers/distance.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/distance', function (req, res) {
  // console.log('request body', req.body);
  let origin = req.body.origin;
  let destination = req.body.destination;
  getDistanceBetweenZipCodes(origin, destination, (result) => {
    //console.log('This is the result from the API call in the server', result);
    res.status(200).send(result);
    res.end();
  });
});


let port = 4600;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});