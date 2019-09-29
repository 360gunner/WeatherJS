const request = require("request")
const private = require("./private")
var url = private.url
//the url is a link u get from the darksky.net api , make account they will give u yours
url = url + "?units=si"
request({ url: url, json: true},(error,response) => {
    const degree = response.body.currently.temperature
    
    const proba = response.body.currently.precipProbability

    console.log("It is currently "+degree+" degrees out.\nThere is a "+proba+"% chance of rain.")
})