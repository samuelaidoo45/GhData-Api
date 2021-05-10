
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



module.exports = {getAshantiTowns,getAhafoTowns,getBonoTowns};
