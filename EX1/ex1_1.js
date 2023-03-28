/**
 * Print the names of those who are 22-32 years old
 * Get their names length
 * @type {[{name: string, age: number},{name: string, age: number},{name: string, age: number}]}
 */

let arr = [{name: "Ron", age: 20},
    {name: "Dana", age: 30},
    {name: "Avi", age: 40}];

let person = arr.filter(per => per.age >= 22 && per.age <= 32);
person.forEach(per => console.log(per.name));
let length_name = person.map(per=> per.name.length);
console.log('length name:',length_name);