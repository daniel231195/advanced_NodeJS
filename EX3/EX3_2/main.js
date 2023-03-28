const utils = require('./utils')

utils.getPersonsNameByStreet("Begin")
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
