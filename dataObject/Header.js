class Header{
     allowOrigin = {key:"Access-Control-Allow-Origin",value:"*"};
     allowHeadrs = {key:"Access-Control-Allow-Headers",value:"Origin, X-Requested-With, Content-Type, Accept"};
     allowMethods = {key:"Access-Control-Allow-Methods",value:"PUT,POST,GET,DELETE,OPTIONS"};
     contentType = {key:"Content-Type",value:"application/json;charset=utf-8"};
}

module.exports = Header;