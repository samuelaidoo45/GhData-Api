const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const {getAshantiTowns} = require('../controller/getjson');
const fs = require('fs');


module.exports = router;