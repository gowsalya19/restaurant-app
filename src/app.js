 const express=require('express')
   const path=require('path')
   const hbs=require('hbs')
 const app=express()
 const port=process.env.PORT || 3000
 const restaurant=require('./restaurant')
 //const document=require('document')

   const publicdirectory=path.join(__dirname,'../public')
   app.set('view engine','hbs')
  
   app.use(express.static(publicdirectory))

 app.get('',(req,res)=>{

    res.render('home')
    
  
    //const id1=document.getElementById('city')
      // console.log(id1);
 })
 app.post('/list',(req,res)=>{

   res.render('tablebook')

 })

app.get('/dropdown',(req,res)=>{
  console.log('Dropdown')
})

app.get('/book',(req,res)=>{
  var request = require("request");
  console.log(req.param('citys'))
id=req.param('citys')
if(id==7)
{
  var options = { method: 'GET',
    url: 'https://developers.zomato.com/api/v2.1/search',
    qs: { entity_id: '7', entity_type: 'city', q: 'chennai', count: '10' },
    headers: 
     { 'cache-control': 'no-cache',
       Connection: 'keep-alive',
       
       'user-key': '1e8cf40b035c5ccd8c8bbfc1976efc77',
       Accept: 'application/json' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    body = JSON.parse(body)
    var html='';
  html+='<link rel="stylesheet" href="./css/style.css"></link>'
  html +="<body>";
  html += "<form action='/list'  method='post' name='form1'>";
  html+="<center>";
  html+="<h1>Book Table</h1>"
  html+="<div class='main'>"
  for(i=0;i<10;i++)
  {
  html+='<p><b> Restaurant Name :</b>'+body.restaurants[i].restaurant.name+'<br>  <b>Restaurant Location :</b>'+body.restaurants[i].restaurant.location.address+'<p>';
  html += "<input type='submit' class='button' value='Book Table'>";  
  html+="<br><br>"
  }
  html+="</div>"
  html+="</center>";
  html += "</form>";
  html += "</body>";
  res.send(html);

  });
  
}
if(id==3)
{
  var request = require("request");

  var options = { method: 'GET',
    url: 'https://developers.zomato.com/api/v2.1/search',
    qs: { entity_id: '3', entity_type: 'city', q: 'mumbai', count: '10' },
    headers: 
     { 'cache-control': 'no-cache',
       Connection: 'keep-alive',
       'user-key': '1e8cf40b035c5ccd8c8bbfc1976efc77',
       Accept: 'application/json' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    body = JSON.parse(body)
    var html='';
    html+='<link rel="stylesheet" href="./css/style.css"></link>'
    html +="<body>";
    html += "<form action='/list'  method='post' name='form1'>";
    html+="<center>";
    html+="<h1>Book Table</h1>"
    html+="<div class='main'>"
    for(i=0;i<10;i++)
    {
    html+='<p><b> Restaurant Name :</b>'+body.restaurants[i].restaurant.name+'<br>  <b>Restaurant Location :</b>'+body.restaurants[i].restaurant.location.address+'<p>';
    html += "<input type='submit' class='button' value='Book Table'>";  
    html+="<br><br>"
    }
    html+="</div>"
    html+="</center>";
    html += "</form>";
    html += "</body>";
    res.send(html);
  
  });
  
}
if(id==1)
{
  var request = require("request");

var options = { method: 'GET',
  url: 'https://developers.zomato.com/api/v2.1/search',
  qs: { entity_id: '1', entity_type: 'city', q: 'delhi', count: '10' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'user-key': '1e8cf40b035c5ccd8c8bbfc1976efc77',
     Accept: 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  body = JSON.parse(body)
   
  var html='';
  html+='<link rel="stylesheet" href="./css/style.css"></link>'
  html +="<body>";
  html += "<form action='/list'  method='post' name='form1'>";
  html+="<center>";
  html+="<h1>Book Table</h1>"
  html+="<div class='main'>"
  for(i=0;i<10;i++)
  {
  html+='<p><b> Restaurant Name :</b>'+body.restaurants[i].restaurant.name+'<br>  <b>Restaurant Location :</b>'+body.restaurants[i].restaurant.location.address+'<p>';
  html += "<input type='submit' class='button' value='Book Table'>";  
  html+="<br><br>"
  }
  html+="</div>"
  html+="</center>";
  html += "</form>";
  html += "</body>";
  res.send(html);

});
}
if(id==4)
{
  var request = require("request");

var options = { method: 'GET',
  url: 'https://developers.zomato.com/api/v2.1/search',
  qs: 
   { entity_id: '4',
     entity_type: 'city',
     q: 'Bangaluru',
     count: '10' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'user-key': '1e8cf40b035c5ccd8c8bbfc1976efc77',
     Accept: 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  body = JSON.parse(body)
  var html='';
  html+='<link rel="stylesheet" href="./css/style.css"></link>'
  html +="<body>";
  html += "<form action='/list'  method='post' name='form1'>";
  html+="<center>";
  html+="<h1>Book Table</h1>"
  html+="<div class='main'>"
  for(i=0;i<10;i++)
  {
  html+='<p><b> Restaurant Name :</b>'+body.restaurants[i].restaurant.name+'<br>  <b>Restaurant Location :</b>'+body.restaurants[i].restaurant.location.address+'<p>';
  html += "<input type='submit' class='button' value='Book Table'>";  
  html+="<br><br>"
  }
  html+="</div>"
  html+="</center>";
  html += "</form>";
  html += "</body>";
  res.send(html);

});

}
if(id==6)
{
  var request = require("request");

var options = { method: 'GET',
  url: 'https://developers.zomato.com/api/v2.1/search',
  qs: 
   { entity_id: '6',
     entity_type: 'city',
     q: 'hyderabad',
     count: '10' },
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'user-key': '1e8cf40b035c5ccd8c8bbfc1976efc77',
     Accept: 'application/json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  body = JSON.parse(body)

  var html='';
  html+='<link rel="stylesheet" href="./css/style.css"></link>'
  html +="<body>";
  html += "<form action='/list'  method='post' name='form1'>";
  html+="<center>";
  html+="<h1>Book Table</h1>"
  html+="<div class='main'>"
  for(i=0;i<10;i++)
  {
  html+='<p><b> Restaurant Name :</b>'+body.restaurants[i].restaurant.name+'<br>  <b>Restaurant Location :</b>'+body.restaurants[i].restaurant.location.address+'<p>';
  html += "<input type='submit' class='button' value='Book Table'>";  
  html+="<br><br>"
  }
  html+="</div>"
  html+="</center>";
  html += "</form>";
  html += "</body>";
  res.send(html);

  //for(i=0;i<10;i++)
  //{
    //  res.write('<html>')
    //  res.write('<body>')
    //  res.write('<center>')
    //  res.write("<from method='POST'>")
    //  res.write('<div>')
    // res.write('<p> Restaurant Name :'+body.restaurants[i].restaurant.name+'<p>')
    //  res.write('<p> Restaurant Location :'+body.restaurants[i].restaurant.location.address+'<p>')
    //  res.write('<button type="submit" class="btn btn-primary btn-lg" backcolor="green" formaction="/list">Book Table</button>')
    //  res.write('</div>')
    //  res.write("<br>")
    //  res.write("<br>")
    //  res.write("</form>")
    //  res.write('</center>')
    //  res.write('</body>')
    //  res.write('</html>')
   
   
  //}
});

}
})

 app.listen(port,()=>{
     console.log('Server is up on port '+port)
 })

 
