
const fs = require('fs');

const getAshantiTowns = (req, res, next) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    const ashantiTowns = fs.readFileSync('./regions/Ashanti.json', "utf8")
    
    res.send(ashantiTowns);
} //Get towns in the Ashanti Region

const getAhafoTowns =(req, res, next) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    const ahafoTowns = fs.readFileSync('./regions/Ahafo.json', "utf8")
    
    res.send(ahafoTowns);
} //Get towns in the Ahafo Region

const getBonoTowns =(req, res, next) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    const bonoTowns = fs.readFileSync('./regions/Bono.json', "utf8")
    res.send(bonoTowns);
} //Get towns in the Bono Region


const getBonoEastTowns =(req, res, next) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    const bonoEastTowns = fs.readFileSync('./regions/BonoEast.json', "utf8")
    res.send(bonoEastTowns);
} //Get towns in the Bono East Region

const getCentralTowns =(req, res, next) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    const centralTowns = fs.readFileSync('./regions/Central.json', "utf8")
    res.send(centralTowns);
} //Get towns in the Central Region


const getEasternTowns =(req, res, next) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    const easternTowns = fs.readFileSync('./regions/Eastern.json', "utf8")
    res.send(easternTowns);
} //Get towns in the Eastern Region



module.exports = {getAshantiTowns,getAhafoTowns,getBonoTowns,getBonoEastTowns,getCentralTowns,getEasternTowns};
