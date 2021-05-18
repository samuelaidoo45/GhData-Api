const fs = require("fs");

var datapath = './ghdata/universities/';
var allowOrigin = {key:"Access-Control-Allow-Origin",value:"*"};
var allowHeadrs = {key:"Access-Control-Allow-Headers",value:"Origin, X-Requested-With, Content-Type, Accept"};
var allowMethods = {key:"Access-Control-Allow-Methods",value:"PUT,POST,GET,DELETE,OPTIONS"};
var contentType = {key:"Content-Type",value:"application/json;charset=utf-8"};

const getUniversities = (req,res,next)=>
{
    res.header(allowOrigin.value, allowOrigin.value );
    res.header(allowHeadrs.key,allowHeadrs.value );
    res.header(allowMethods.key,allowMethods.value);
    res.header(contentType.key, contentType.value);
    const ghUniversities = fs.readFileSync(datapath + 'universities.json', "utf8")
    res.send(ghUniversities);
}


module.exports = {getUniversities};