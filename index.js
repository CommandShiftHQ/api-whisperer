const secrets = require('secrets.js-grempe');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

// game setup
const pw = 'l33t h4x0r';
const noOfShares = 3;
const noOfThreshold = 3;

const pwHex = secrets.str2hex(pw);
const shares = secrets.share(pwHex, noOfShares, noOfThreshold);
console.log(shares, 'assign each team one of these keys')

app.use(bodyParser.json())
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

app.listen(process.env.PORT || 3000);
console.log('Judge API is running on 3000');