const axios = require('axios');

const getNameEamil = async () => {
    let allUser = await axios.get("https://jsonplaceholder.typicode.com/users");
    return allUser.data;
};

module.exports = {
    getNameEamil
}