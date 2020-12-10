const secrets = require('secrets.js-grempe');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

app.use(bodyParser.json())

app.post('/get-keys', (req, res) => {
    const pw = 'l33t h4x0r';
    const noOfShares = req.body.shares;
    const noOfThreshold = req.body.threshold;
    const pwHex = secrets.str2hex(pw);
    const shares = secrets.share(pwHex, noOfShares, noOfThreshold);

    res.status(200).send(shares)

});

app.post('/claim-victory', (req, res) => {
    try {
        let combined = '';
        const shares = req.body.keys;
        const combinedShares = secrets.combine(shares);
        combined = secrets.hex2str(combinedShares);
        if(combined === pw) {
            axios.post(req.body.successURL, {secret: pw})
            res.send(`You got it! Hitting POST ${req.body.successURL} with the secret now.`)
        } else {
            res.send(`Keys are wrong, you need at least ${noOfThreshold} keys.`);
        }
    } catch (err) {
        console.log(err)
        res.send('Data received is not in the right format.')
    };
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`Judge API is running on ${port}`);