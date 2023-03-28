const utils = require('./utils')

// utils.idToGetAllData(1)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


utils.getUserData(1)
    .then(data => console.log(data))
    .catch(err => console.log(err))
