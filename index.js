var express = require('express');
var app = express();

var yelp = require('yelp-fusion');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// these must be EXPORTED to node's environment:
// $ export CLIENT_ID=""
// $ export CLIENT_SECRET=""
//
var clientId = process.env.CLIENT_ID
var clientSecret = process.env.CLIENT_SECRET

var yelpClient;

yelp.accessToken(clientId, clientSecret).then(response => {
  yelpClient = yelp.client(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

// FIXME: Accept parameters from browsers using request parameters
app.get('/yelpdata.json', function(req, resp) {

  var searchRequest = {
    term:'pearl',
    location: 'San Antonio, TX',
    categories: 'coffee'
  };

  yelpClient.search(searchRequest).then(response => {
    // FIXME: Return more than one result
    const firstResult = response.jsonBody.businesses[0];

    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);

    resp.json(firstResult);
  });

});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
