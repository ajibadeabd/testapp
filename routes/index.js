var express = require('express');
var router = express.Router();
let server= true
let down = false
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  res.status(200).json('test api running')
});
router.get('/health', function(req, res, next) {
  if(server) {
    res.status(200).json('server is up')
  }else{
    res.status(500).json('server is down')

  }

});
router.get('/startServer', function(req, res, next) {
  server=true
  res.status(200).json('server is running')
});
router.get('/stopServer', function(req, res, next) {
  server=false

  res.status(500).json('server stopped')

});

module.exports = router;
