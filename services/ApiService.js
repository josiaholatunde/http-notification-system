const axios = require('./axiosConfig')

module.exports = {
    publishToSubscriber: async(apiUrl, requestBody, customHeaders = []) => {
        try {
            return await axios.post(apiUrl, requestBody)
        } catch (ex) {
            console.error('An error occurred while making call to subscriber url', ex);
            throw ex;
        }
    }
}