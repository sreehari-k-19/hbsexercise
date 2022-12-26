var express = require("express");
var router = express.Router();

const  credential = {
    email : "admin@gmail.com",
    password : "123"
}

const sumsung = [
    {
      name: "Samsung Galaxy S22 Ultra",
      price: "Rs.1,09,999",
      para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
      image:"/sumsungs22ultra.jpg",
    },
    {
      name: "Samsung Galaxy S22+",
      price: "Rs.1,09,999",
      image:"/splus.jpg",
      para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
    },
    {
      name: "Samsung Galaxy S21 Ultra",
      price: "Rs.1,09,999",
      image:"/sumss21ultra.jpg",
      para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
    },
    {
      name: "Samsung Galaxy Z Fold 3",
      price: "Rs.1,09,999",
      image:"/zfold.jpg",
      para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
    },
    {
      name: "Samsung Galaxy S21 FE",
      price: "Rs.1,09,999",
      image:"/s21fe.jpg",
      para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
    },
    {
      name: "Samsung Galaxy S21 FE",
      price: "Rs.1,09,999",
      image:"/zflip.jpg",
      para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
    },
    
  ]
router.post('/login', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
    }else{
        res.end("Invalid Username")
    }
});

router.get('/dashboard', (req, res) => {
    if(req.session.user){
    res.render('dashboard', {user : req.session.user,sumsung})
    }else{
        res.send("Unauthorize User")
    }
})

router.get('/logout', (req ,res)=>{
    req.session.destroy(function(err){
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base', { title: "Express", logout : "logout Successfully...!"})
        }
    })
})

module.exports = router;