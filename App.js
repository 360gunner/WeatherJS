const request = require("request")
const private = require("./private")
var urldarksky = private.url
//the url is a link u get from the darksky.net api , make account they will give u yours
urldarksky = urldarksky 
var urlgeocode = "https://api.mapbox.com/geocoding/v5/mapbox.places/kolea%20tipaza.json?"+"limit=1&"+private.key
//the key a private key for ur account u get it from the mapbox api website
request({ url: urlgeocode, json: true }, (error, response) => {
   if (error) {
       console.log('Unable to connect to location services!')
   } else if (response.body.features.length === 0) {
       console.log('Unable to find location. Try another search.')
   } else {
       const latitude = response.body.features[0].center[0]
       const longitude = response.body.features[0].center[1]
       console.log(latitude, longitude)
   }
})



