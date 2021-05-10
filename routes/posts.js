const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const {getAshantiTowns,getAhafoTowns,getBonoTowns} = require('../controller/getjson');
const fs = require('fs');



/**
*@api {get} /ashanti/towns Towns in the Ashanti Region 
*@apiName AshantiTowns
*@apiGroup Towns
*
*/
router.get('/ashanti/towns',getAshantiTowns);



/**
*@api {get} /ahafo/towns Towns in the Ahafo Region 
*@apiName AhafoTowns
*@apiGroup Towns
*
*/
router.get('/ahafo/towns',getAhafoTowns);

/**
*@api {get} /bono/towns Towns in the Bono Region 
*@apiName BonoTowns
*@apiGroup Towns
*
*/
router.get('/bono/towns',getBonoTowns);



module.exports = router;