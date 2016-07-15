var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});

router.get('/couch', function(req, res, next) {
  res.sendFile(path.join(__dirname+'/public/couch/index.php'));
});

module.exports = router;
