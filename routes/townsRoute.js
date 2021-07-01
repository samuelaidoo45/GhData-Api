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
*@api {get} /ahafo-towns Towns in the Ahafo Region 
*@apiName AhafoTowns
*@apiGroup Towns
*
*/
router.get('/ahafo-towns',getData);

/**
*@api {get} /bono-towns Towns in the Bono Region 
*@apiName BonoTowns
*@apiGroup Towns
*
*/

router.get('/bono-towns',getData);


/**
*@api {get} /bonoeast-towns Towns in the Bono East Region 
*@apiName BonoEastTowns
*@apiGroup Towns
*
*/

router.get('/bonoeast-towns',getData);


/**
*@api {get} /central-towns Towns in the Central Region 
*@apiName CentralTowns
*@apiGroup Towns
*
*/

router.get('/central-towns',getData);


/**
*@api {get} /eastern-towns Towns in the Eastern Region 
*@apiName EasternTowns
*@apiGroup Towns
*
*/

router.get('/eastern-towns',getData);

/**
*@api {get} /northeast-towns Towns in the North East Region 
*@apiName NorthEastTowns
*@apiGroup Towns
*
*/

router.get('/northeast-towns',getData);
/**
*@api {get} /northen-towns Towns in the Northern Region 
*@apiName NothernTowns
*@apiGroup Towns
*
*/
router.get('/northen-towns',getData);

/**
*@api {get} /oti-towns Towns in the Oti Region 
*@apiName OtiTowns
*@apiGroup Towns
*
*/

router.get('/oti-towns',getData);


/**
*@api {get} /savannah-towns Towns in the Savannah Region 
*@apiName SavannahTowns
*@apiGroup Towns
*
*/
router.get('/savannah-towns',getData);

/**
*@api {get} /uppereast-towns Towns in the Upper East Region 
*@apiName UpperEastTowns
*@apiGroup Towns
*
*/
router.get('/uppereast-towns',getData);

/**
*@api {get} /upperwest-towns Towns in the Upper West Region 
*@apiName UpperWestTowns
*@apiGroup Towns
*
*/
router.get('/upperwest-towns',getData);

/**
*@api {get} /volta-towns Towns in the Volta Region 
*@apiName VoltaTowns
*@apiGroup Towns
*
*/
router.get('/volta-towns',getData);

/**
*@api {get} /western-towns Towns in the Western Region 
*@apiName WesternTowns
*@apiGroup Towns
*
*/
router.get('/western-towns',getData);

/**
*@api {get} /westernnorth-towns Towns in the Western North Region 
*@apiName WesternMpthTowns
*@apiGroup Towns
*
*/
router.get('/westernnorth-towns',getData);




module.exports = router;