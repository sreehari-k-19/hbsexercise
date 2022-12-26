var express = require('express');
var router = express.Router();

/* GET home page. */
const sumsung = [
  {
    name: "Samsung Galaxy S22 Ultra",
    price: "Rs.1,09,999",
    para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
    image:"/images/sumsungs22ultra.jpg",
  },
  {
    name: "Samsung Galaxy S22+",
    price: "Rs.1,09,999",
    image:"/images/splus.jpg",
    para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
  },
  {
    name: "Samsung Galaxy S21 Ultra",
    price: "Rs.1,09,999",
    image:"/images/sumss21ultra.jpg",
    para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
  },
  {
    name: "Samsung Galaxy Z Fold 3",
    price: "Rs.1,09,999",
    image:"/images/zfold.jpg",
    para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
  },
  {
    name: "Samsung Galaxy S21 FE",
    price: "Rs.1,09,999",
    image:"/images/s21fe.jpg",
    para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
  },
  {
    name: "Samsung Galaxy S21 FE",
    price: "Rs.1,09,999",
    image:"/images/zflip.jpg",
    para: "The Galaxy S22 Ultra is Samsung's flagship this year, and was launched alongside the Galaxy S22 and Galaxy S22+. The highlight of the Galaxy S22 Ultra is its support for an S Pen stylus, which thus far, has been exclusive to the Galaxy Note series.",
  },
  
]
router.get('/', function (req, res, next) {
  res.render('card', {sumsung});
});

module.exports = router;
