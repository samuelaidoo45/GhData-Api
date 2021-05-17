const fs = require("fs");

var datapath = './ghdata/universities/';
var allowOrigin = "Access-Control-Allow-Origin";
var allowHeadrs = "Access-Control-Allow-Headers";
var allowMethods = "Access-Control-Allow-Methods";
var contentType ="Content-Type";

const getUniversities = (req,res,next)=>
{
    res.header(allowOrigin, "*");
    res.header(allowHeadrs, "Origin, X-Requested-With, Content-Type, Accept");
    res.header(allowMethods,"PUT,POST,GET,DELETE,OPTIONS");
    res.header(contentType, "application/json;charset=utf-8");
    const ashantiTowns = fs.readFileSync(datapath + 'universities.json', "utf8")
}


module.exports = {getUniversities};