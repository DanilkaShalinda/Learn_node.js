
const  path = require('path');
const express = require('express');
// export shop routes
const router = express.Router();

router.get('/hello', (req, res, next) => {
  res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

//res.sendFile('./views/shop.html'); if we try to send our file like this the computer will start pathing out root folder as system folder so we have to use path module

module.exports = router;
// export shop routes