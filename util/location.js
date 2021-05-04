const axios = require('axios');
const HttpError = require('../models/http-error');
const API_KEY = process.env.GOOGLE_API_KEY;

async function getCoordsForAddress(address) {
    // const response = await axios.get(
    //     `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);
    
    // const data = await response.data;

    // if (!data || data.status === 'ZERO_RESULTS') {
    //     const error = new HttpError('Could not find location for the specified address', 422);
    //     throw error;
    // }
    // console.log(data);
    // const coordinates = data.results[0].geometry.location;

    // return coordinates;
    return {    // return dummy data at the moment 
        lat: 24.33333,
        lng: -79.2333333
    };
}

module.exports = getCoordsForAddress;