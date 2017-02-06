
var request = new XMLHttpRequest();

//FIXME: request parameters
// request.open('GET', '/yelpdata.json?zip=78230', true);

request.open('GET', '/yelpdata.json', true);
request.send();

function transferComplete(e) {
  console.log("REQ: " + request.responseText);
}

request.addEventListener("load", transferComplete, false);
