var express = require('express');
var router = express.Router();

// const homePageController = require('../controllers/main');
const locationsController = require('../controllers/locations');
const othersControler = require('../controllers/others');

/* GET home page. */
router.get('/', locationsController.homelist);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

router.get('/about', othersControler.about);
module.exports = router;
