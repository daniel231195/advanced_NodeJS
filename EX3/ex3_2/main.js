const utils = require('./utils')
/**
 * Createa JSON file represents Person with the following structure:
 * Name : "", Address : {
 * City : "", Street : {
 * Name : "",
 * Number : "" }
 * }
 * Fill the file with 2 Person data.
 * Write a function in module called filesUtils that receive a street name and returns the person's name who lives there after 2 sec.
 */
utils.getPersonsNameByStreet("Begin")
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
