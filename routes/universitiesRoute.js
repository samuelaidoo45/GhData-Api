const express = require('express');
const router = express.Router();
const {getUniversities} = require('../controller/universitiesController');
const fs = require('fs');

/**
*@api {get} /universities  Universities in Ghana
*@apiName universitiesInGhana
*@apiGroup Universities
*
*/
router.get('/universities',getUniversities);


module.exports = router;