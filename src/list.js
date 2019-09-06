const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const restaurant=require('./restaurant')

const publicdirectory=path.join(__dirname,'../public')
app.set('view engine','hbs')

app.use(express.static(publicdirectory))


app.get('/list.js',(req,res)=>{
    res.render('list')

    restaurant((error,rest)=>{
      if(error)
     {
         return res.send({error});
      }
      else{
        console.log(rest);
        
      }
      
  
  })
 })

 app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})


