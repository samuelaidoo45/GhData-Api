
const fs = require('fs');

const getAshantiTowns =(req, res, next) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    const ashantiTowns = fs.readFileSync('./regions/Ashanti.json', "utf8")
    
    res.send(ashantiTowns);
} //Get towns in the Ashanti Region



module.exports = {getAshantiTowns};
