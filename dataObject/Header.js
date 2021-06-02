class Header{
     allowOrigin = {key:"Access-Control-Allow-Origin",value:"*"};
     allowHeadrs = {key:"Access-Control-Allow-Headers",value:"Origin, X-Requested-With, Content-Type, Accept"};
     allowMethods = {key:"Access-Control-Allow-Methods",value:"PUT,POST,GET,DELETE,OPTIONS"};
     contentType = {key:"Content-Type",value:"application/json;charset=utf-8"};

      head = function(res){
          res.header(allowOrigin.key, allowOrigin.value );
          res.header(allowHeadrs.key,allowHeadrs.value );
          res.header(allowMethods.key,allowMethods.value);
          res.header(contentType.key, contentType.value);
      };
}

module.exports = Header;