const express = require('express');
const router = express.Router();
const {MembersOfParliament} = require('../controller/mpsController');
const fs = require('fs');

/**
*@api {get} /mps  Members Of Parliament
*@apiName MembersOfParliament
*@apiGroup MP's
*
*/
router.get('/mps',MembersOfParliament);


module.exports = router;