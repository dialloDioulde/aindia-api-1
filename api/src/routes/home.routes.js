const router = require('express-promise-router')();
const homeController = require('../controllers/home.controller');


router.post('/home', homeController.index);

module.exports = router;