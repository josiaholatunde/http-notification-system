const axios = require('axios')


const axiosDefaultInstance = axios.create({
    timeout: 10000,
    headers: {
        //initialize default application headers here
        "Content-Type": "application/json;charset=UTF-8",
    },
    withCredentials: true
});


module.exports = axiosDefaultInstance