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



module.exports = {getUserData}
