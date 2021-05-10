define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C:\\Users\\steph\\Documents\\appdev\\api\\ghdata\\doc\\main.js",
    "groupTitle": "C:\\Users\\steph\\Documents\\appdev\\api\\ghdata\\doc\\main.js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/ahafo/towns",
    "title": "Towns in the Ahafo Region",
    "name": "AhafoTowns",
    "group": "Towns",
    "version": "0.0.0",
    "filename": "./routes/posts.js",
    "groupTitle": "Towns",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/ahafo/towns"
      }
    ]
  },
  {
    "type": "get",
    "url": "/ashanti/towns",
    "title": "Towns in the Ashanti Region",
    "name": "AshantiTowns",
    "group": "Towns",
    "version": "0.0.0",
    "filename": "./routes/posts.js",
    "groupTitle": "Towns",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/ashanti/towns"
      }
    ]
  }
] });
