const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const db = require("./routes/config/mongodb");
db.connect( function( err, client ) {
    if (err) console.log(err);
    // start the rest of your app here
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



let tmp = 'this is aaded by user 1';

var transaction = require('./routes/transaction');
var about = require('./routes/about');
app.use('/bank', transaction);
//this about page is only for static data
app.use('/about', about);
app.use('/help', (req, res) => {
    //set status 
    res.status(200);
    res.send("Help query details");
});
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log('server is running os port'+ port));
