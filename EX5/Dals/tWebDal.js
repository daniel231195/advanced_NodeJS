const axios = require('axios');


const getTitles = async ()=>{
    let toDoList = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return toDoList.data;
};

module.exports ={
    getTitles
}