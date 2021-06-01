const express = require('express');
const router = express.Router();
const {getAshantiTowns,getAhafoTowns,getBonoTowns,getBonoEastTowns,getCentralTowns,getEasternTowns} = require('../controller/townsController');
const fs = require('fs');
const {getData} = require('../controller/getData');

/**
*@api {get} /ashanti-towns Towns in the Ashanti Region 
*@apiName AshantiTowns
*@apiGroup Towns
*
*/
router.get('/ashanti-towns',getData);

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


/**
*@api {get} /bonoeast/towns Towns in the Bono East Region 
*@apiName BonoEastTowns
*@apiGroup Towns
*
*/

router.get('/bonoeast/towns',getBonoEastTowns);


/**
*@api {get} /central/towns Towns in the Central Region 
*@apiName CentralTowns
*@apiGroup Towns
*
*/

router.get('/central/towns',getCentralTowns);


/**
*@api {get} /eastern/towns Towns in the Eastern Region 
*@apiName EasternTowns
*@apiGroup Towns
*
*/

router.get('/eastern/towns',getEasternTowns);



module.exports = router;