const utils = require('./utils')
/**
 * Create a utils module with a function that receivea user id and returns a json With data pulled from the following json files
 */
utils.getUserData(1)
    .then(data => console.log(data))
    .catch(err => console.log(err))
