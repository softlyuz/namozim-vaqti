const { default: axios } = require('axios');
const baseUrl = "http://api.aladhan.com/v1/calendar";

let date = new Date();
module.exports = async function callApi(latitude, longitude, month = date.getMonth() + 1, year = date.getFullYear()) {
    return axios
        .get(baseUrl, {
            params: {
                latitude,
                longitude,
                method: 2,
                month,
                year,
                school: 1
            }
        })
        .then(response => response.data);
}