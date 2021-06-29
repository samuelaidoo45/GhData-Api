const fs = require('fs');
const header = require('../dataObject/Header');//Res headers

hd = new header();

var datapath = './ghdata/regions/';
var allowOrigin = "Access-Control-Allow-Origin";
var allowHeadrs = "Access-Control-Allow-Headers";
var allowMethods = "Access-Control-Allow-Methods";
var contentType ="Content-Type";

const getAshantiTowns = (req, res, next) =>
{
    res.header(hd.allowOrigin.key, hd.allowOrigin.value );
    res.header(hd.allowHeadrs.key,hd.allowHeadrs.value );
    res.header(hd.allowMethods.key,hd.allowMethods.value);
    res.header(hd.contentType.key, hd.contentType.value);
    console.log(req.url);
    console.log(datapath + req.url+'.json');
    fs.readFile(datapath + req.url+'.json', "utf8",function(err,data){
        res.send(data);
    })
    
    
} //Get towns in the various regions

const getAhafoTowns =(req, res, next) =>
{
    res.header(hd.allowOrigin.key, hd.allowOrigin.value );
    res.header(hd.allowHeadrs.key,hd.allowHeadrs.value );
    res.header(hd.allowMethods.key,hd.allowMethods.value);
    res.header(hd.contentType.key, hd.contentType.value);
    const ahafoTowns = fs.readFileSync(datapath+'Ahafo.json', "utf8")
    
    res.send(ahafoTowns);
} //Get towns in the Ahafo Region

const getBonoTowns =(req, res, next) =>
{
    res.header(hd.allowOrigin.key, hd.allowOrigin.value );
    res.header(hd.allowHeadrs.key,hd.allowHeadrs.value );
    res.header(hd.allowMethods.key,hd.allowMethods.value);
    res.header(hd.contentType.key, hd.contentType.value);
    const bonoTowns = fs.readFileSync(datapath+ 'Bono.json', "utf8")
    res.send(bonoTowns);
} //Get towns in the Bono Region


const getBonoEastTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const bonoEastTowns = fs.readFileSync(datapath + 'BonoEast.json', "utf8")
    res.send(bonoEastTowns);
} //Get towns in the Bono East Region

const getCentralTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const centralTowns = fs.readFileSync(datapath + 'Central.json', "utf8")
    res.send(centralTowns);
} //Get towns in the Central Region


const getEasternTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const easternTowns = fs.readFileSync(datapath + 'Eastern.json', "utf8")
    res.send(easternTowns);
} //Get towns in the Eastern Region

const getNorthEastTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const northeastTowns = fs.readFileSync(datapath + 'NorthEast.json', "utf8")
    res.send(northeastTowns);
} //Get towns in the North Eastern Region

const getNorthenTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const northenTowns = fs.readFileSync(datapath + 'Northen.json', "utf8")
    res.send(northenTowns);
} //Get towns in the Northern Region

const getOtiTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const otitowns = fs.readFileSync(datapath + 'Oti.json', "utf8")
    res.send(otitowns);
} //Get towns in the Oti Region

const getSavannahTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const otitowns = fs.readFileSync(datapath + 'Savannah.json', "utf8")
    res.send(otitowns);
}

const getUpperEastTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const otitowns = fs.readFileSync(datapath + 'UpperEast.json', "utf8")
    res.send(otitowns);
}

const getUpperWestTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const otitowns = fs.readFileSync(datapath + 'UpperWest.json', "utf8")
    res.send(otitowns);
}

const getVoltaTowns =(req, res, next) =>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const otitowns = fs.readFileSync(datapath + 'Volta.json', "utf8")
    res.send(otitowns);
}

module.exports = {
    getAshantiTowns,
    getAhafoTowns,
    getBonoTowns,
    getBonoEastTowns,
    getCentralTowns,
    getEasternTowns,
    getNorthEastTowns,
    getNorthenTowns,
    getOtiTowns,
    getSavannahTowns,
    getUpperEastTowns,
    getUpperWestTowns,
    getVoltaTowns
};
