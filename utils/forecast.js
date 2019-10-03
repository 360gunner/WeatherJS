const request = require('request')
const private = require("./private")

const forecast = (latitude, longitude, callback) => {
    const url = private.url + latitude + ',' + longitude
//the url is a link u get from the darksky.net api , make account they will give u yours
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast