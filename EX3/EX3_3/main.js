const utils = require('./utils')

utils.getUserData(1)
    .then(data => console.log(data))
    .catch(err => console.log(err))
