const express = require("express");
const router = express.Router();
const db = require("./config/mongodb");
const tablename = 'user_account';


// this is added by real user 1 in its own branch

router.post('/', function(req, res) {
    //send static data
    res.status(200);
    return  res.send("<div>contact us on 900399393 ist thanks</div>");
});

module.exports = router;