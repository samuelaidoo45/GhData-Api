const fs = require('fs');
const header = require('../dataObject/Header');//Res headers

hd = new header();

var datapath = './ghdata/regions/'


const getData = (req, res, next) =>
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
} //Get Data from the json files

module.exports = {getData}