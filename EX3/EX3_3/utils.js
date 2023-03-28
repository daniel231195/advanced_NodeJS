const jFile=require('jsonfile')

getUserData = (id)=>{
  return new Promise((resolve, reject)=>{
        jFile.readFile('./users.json',(err,users)=>{
            if(err){
                reject(err)
            }
            else{
             jFile.readFile('./phones.json',(err,phones)=>{
                 if (err){
                     reject(err)
                 }
                 else{
                     let jUId = users.users.find(x=>x.id===id)
                     console.log(jUId)
                     let jPId = phones.phones.find(x=>x.userid===id)
                     let res = {
                         "id":jUId.id,
                         "name": jUId.name,
                         "phones":jPId.phones
                     }
                     resolve(res)
                 }
             })
            }
        })
  });
};



//
// const getUserData = (id) =>
// {
//     return new Promise((resolve,reject) =>
//     {
//         let userdData = {};
//         userdData.id = id;
//
//         jFile.readFile('./users.json', function(err, data)
//         {
//             if(err)
//             {
//                 reject(err)
//             }
//             else
//             {
//                 let usersArr = data.users;
//                 let user = usersArr.find(x => x.id == id);
//                 userdData.name = user.name;
//
//                 jFile.readFile('./phones.json', function(err, data)
//                 {
//                     if(err)
//                     {
//                         reject(err)
//                     }
//                     else
//                     {
//                         let phonesArr = data.phones;
//                         let userPhones = phonesArr.find(x => x.userid == id);
//
//                         userdData.phones = userPhones.phones;
//
//                         resolve(userdData);
//
//                     }
//                 })
//             }
//         })
//     })
//
// }

module.exports = {getUserData}
