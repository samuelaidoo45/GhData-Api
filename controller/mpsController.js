const fs = require("fs")
const header = require('../dataObject/Header')
hd = new header()

var datapath = './ghdata/members_of_parliament/';

const MembersOfParliament = (req,res,next)=>
{
    res.header(hd.allowOrigin.key, hd.allowOrigin.value );
    res.header(hd.allowHeadrs.key,hd.allowHeadrs.value );
    res.header(hd.allowMethods.key,hd.allowMethods.value);
    res.header(hd.contentType.key, hd.contentType.value);
    const MembersOfParliament = fs.readFileSync(datapath + 'members_of_parliament.json', "utf8")
    res.send(MembersOfParliament);
}


module.exports = {MembersOfParliament};