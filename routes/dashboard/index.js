let express = require('express');
let router = express.Router();
const carController = require('./controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/checkapi', carController.createCar);

module.exports = router;
