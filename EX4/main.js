const utils = require('./ex4_1')

/**
 * Create a program that receives a username as parameter and get the fullname for that user name
 * from https://jsonplaceholder.typicode.com/users.
 * If that name starts with "E", save his tasks titles from
 * https://jsonplaceholder.typicode.com/todos to a json file
 */

utils.getFullUser("Bret").then(data=>console.log(data))

utils.checkE("Antonette").then(data=>console.log(data)).catch(err=>console.log(err))
//utils.checkE("Bret").then(data=>console.log(data)).catch(err=>console.log(err))