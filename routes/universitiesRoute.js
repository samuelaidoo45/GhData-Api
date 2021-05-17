const express = require('express');
const router = express.Router();
const {getUniversities} = require('../controller/universitiesController');
const fs = require('fs');

/**
*@api {get} /universiteis  Universities in Ghana
*@apiName universitiesInGhana
*@apiGroup Universities
*
*/

router.get('/universities',getUniversities);



module.exports = router;