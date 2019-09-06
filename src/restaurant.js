


 const restaurant=(id,callback)=>{

var request = require("request");
let b
var options = { method: 'GET',
  url: 'https://developers.zomato.com/api/v2.1/restaurant',
  qs: { res_id: id, '': '' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
    
     'user-key': '1e8cf40b035c5ccd8c8bbfc1976efc77',
     Accept: 'application/json',
     } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
body = JSON.parse(body)
console.log(body.location)
callback(undefined,{
        
     name:body.name,
     location:body.location.address
           
     })
});
 }

 module.exports=restaurant