const express=require('express')
const app=express();
const path=require('path')

app.get('/',Token,(req,res)=>{
    console.log("userlooged");
    res.sendFile(path.join(__dirname,'home.html'))
})

function Token(req,res,next){
console.log("creating  token")
next()
}

app.listen(3000,()=>{
    console.log('startd....')
})