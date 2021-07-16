const request = require ('postman-request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1a9ca6596181b6966871f01cd9c598f5&query=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longtitude) + '&units=m'

    request ({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect the weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.weather_descriptions[0] + ' in ' + body.location.name + '. The current temperature is ' + body.current.temperature + ' degrees celcius, it feels like ' + body.current.feelslike + ' degrees outside, the humidity is ' + body.current.humidity + '%.'
                // location: response.body.location.name,
                // description: response.body.current.weather_descriptions[0],
                // temperature: response.body.current.temperature,
                // feelslike: response.body.current.feelslike
            )
        }
    })
}

module.exports = forecast