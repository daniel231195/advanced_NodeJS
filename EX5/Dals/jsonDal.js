/**
 * Create a “service” that receives a username as parameter and returns the following data about this user :
 * - His name and email from the following REST API https://jsonplaceholder.typicode.com/users.
 * - A list of the titles of his first 10 tasks from the following REST API
 * https://jsonplaceholder.typicode.com/todos
 * - A list of his phones from the following JSON file: from phone.js
 * Use BL & DALs as necessary, and a main.js for calling the BL
 */

const jFile = require('jsonfile');

const getPhone = async () => {
    return new Promise((resolve, reject) => {
        jFile.readFile('./Dals/phone.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    });
};


module.exports = {
    getPhone
}