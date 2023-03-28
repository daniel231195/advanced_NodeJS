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

const jFile = require('jsonfile');

exports.getPersonsNameByStreet = (street) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            jFile.readFile("./persons.json", (err, data) => {
                if (err) {
                    reject(err)
                } else {
                    let per = data.persons;
                    let finalPers = per.filter((x) => {
                        return x.address.street.name === street
                    });
                    let namePer = finalPers.map((x) => {
                        return x.name
                    })
                    resolve(namePer);
                };
            })
        }, 2000);
    });
};

