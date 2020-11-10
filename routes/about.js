const express = require("express");
const router = express.Router();
const db = require("./config/mongodb");
const tablename = 'user_account';

router.post('/', function(req, res) {
    return  res.send({errorCode: 1009 , errorMessage:"Both account belong to same user"});
});

module.exports = router;