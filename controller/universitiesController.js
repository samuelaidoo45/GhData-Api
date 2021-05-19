const fs = require("fs");
const header = require('../dataObject/Header');
 hd = new header();
 
var datapath = './ghdata/universities/';

const getUniversities = (req,res,next)=>
{
    res.header(hd.allowOrigin.key, hd.allowOrigin.value );
    res.header(hd.allowHeadrs.key,hd.allowHeadrs.value );
    res.header(hd.allowMethods.key,hd.allowMethods.value);
    res.header(hd.contentType.key, hd.contentType.value);
    const ghUniversities = fs.readFileSync(datapath + 'universities.json', "utf8")
    res.send(ghUniversities);
}


module.exports = {getUniversities};