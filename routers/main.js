const express = require ('express');
const router = express();
const path = require('path')

const mainControllers = require ('../controllers/mainControllers.js')

router.get("/", mainControllers.home);
router.get("/about", mainControllers.about);

module.exports = router