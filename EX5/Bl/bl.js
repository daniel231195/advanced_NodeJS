/**
 * Create a “service” that receives a username as parameter and returns the following data about this user :
 * - His name and email from the following REST API https://jsonplaceholder.typicode.com/users.
 * - A list of the titles of his first 10 tasks from the following REST API
 * https://jsonplaceholder.typicode.com/todos
 * - A list of his phones from the following JSON file: from phone.js
 * Use BL & DALs as necessary, and a main.js for calling the BL
 */

const jsonDAl = require('../Dals/jsonDal');
const neWebDal = require('../Dals/neWebDal');
const tWebDal = require('../Dals/tWebDal');

const dataAbout = async (user_name) => {
    let data_json = await jsonDAl.getPhone();
    let phone = data_json.users.find(x => x.username === user_name).phones

    let name_email = await neWebDal.getNameEamil()
    name_email = name_email.find(x => x.username === user_name);

    let list_todo = await tWebDal.getTitles();
    list_todo = list_todo.filter(x => x.userId === name_email.id).map(x => x.title).slice(0, 10);

    return new Promise((resolve) => {
        resolve(
            {
                name: name_email.name,
                email: name_email.email,
                phone: phone,
                title: list_todo
            }
        );
    });

}

module.exports = {
    dataAbout
}