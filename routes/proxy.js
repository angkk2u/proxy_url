var express = require('express');
var router = express.Router();
const axios = require('axios');

/*
* protocol
* domain
* path
*
* */


/* GET users listing. */
router.get('/xml', function (req, res, next) {
    // console.log(req.params);
    console.log(req.query);

    let url = req.query.protocol + "://" + req.query.domain + "/" + req.query.path

    console.log(url);

    axios.get(url, {
        params: {
            // ID: 12345
        },
        responseType: "text"
    })
        .then(function (response) {
            // console.log(response.data);
            // res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
            res.set('Content-Type', 'text/xml');
            res.send(response.data);
        })
        .catch(function (error) {
            console.log("error");
        })
        .finally(function () {
            // always executed
            // res.send('respond with a resource');
        });

});


module.exports = router;
