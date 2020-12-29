const axios = require('axios');

const api = axios.create({
    baseURL: "http://api:3000",
});

module.exports = api;