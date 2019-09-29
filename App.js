const request = require("request")
const private = require("./private")
const url = private.url
//the url is a link u get from the darksky.net api , make account they will give u yours
request({url: url},(error,response) => {
    console.log(response)
})