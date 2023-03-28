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

