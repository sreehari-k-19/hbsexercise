const express=require("express");
const app=express();
const session =require("express-session");

const PORT=process.env.PORT||3000;

app.use(session({
    secret:"key",
    resave:true,
    saveUninitialized:true
}));
app.get("/",(req,res)=>{
    req.session.name="hello";
    return res.send("section set")
})

app.get("/session",(req,res)=>{
    var name=req.session.name;
    return res.send(name)
})
app.get("/destroy",(req,res)=>{
    req.session.destroy((eror)=>{
        console.log("section des.....");
    })
    res.end();
})