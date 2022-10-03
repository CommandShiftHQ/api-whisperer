const secrets = require("secrets.js-grempe");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");
const axios = require("axios");

const app = express();

app.use(express.json());

app.post("/get-keys", (req, res) => {
  const { secret, shares, threshold } = req.body;
  const pwHex = secrets.str2hex(secret);
  const keys = secrets.share(pwHex, shares, threshold);

  res.status(200).send({ keys });
});

app.post("/claim-victory", (req, res) => {
  try {
    let combined = "";
    const shares = req.body.keys;
    const combinedShares = secrets.combine(shares);
    combined = secrets.hex2str(combinedShares);
    axios.post(req.body.successURL, { secret: combined });
    res
      .status(200)
      .json({
        message: `Attempting to decrypt. Hitting POST ${req.body.successURL} with the result now.`,
      });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Data received is not in the right format." });
  }
});

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app