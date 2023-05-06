const path = require('path')
const express = require('express');

// export admin routes
const router = express.Router();


router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
// export admin routes