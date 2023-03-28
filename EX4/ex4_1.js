/**
 * Create a program that receives a username as parameter and get the fullname for that user name
 * from https://jsonplaceholder.typicode.com/users.
 * If that name starts with "E", save his tasks titles from
 * https://jsonplaceholder.typicode.com/todos to a json file
 */

const axios = require('axios');
const jFile = require('jsonfile')
const getFullUser = async (user_name) => {
    try {
        let all_data = await axios.get("https://jsonplaceholder.typicode.com/users");
        let user_data = all_data.data.find(x => x.username === user_name);
        return user_data;
    } catch (error) {
        console.log(error)
    }
};

const checkE = async (user_name) => {
    let user_data = await getFullUser(user_name)
    let full_name = user_data.name;
    if (full_name.charAt(0) === 'E') {
        let all_todo = await axios.get("https://jsonplaceholder.typicode.com/todos");
        let todo_by_user = all_todo.data.filter(x => x.userId === user_data.id);
        let title_user = todo_by_user.map(x => x.title)
        let user = {
            "id": user_data.id,
            "name": full_name,
            "todo": title_user
        }
        return new Promise((resolve, reject) => {
            jFile.writeFile('resultData.json', user, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve("success !")
                }
            })
        });
    }
    else{
        return "name no start with E ! "
    }
};


module.exports = {
    getFullUser,
    checkE
};