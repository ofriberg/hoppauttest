const express = require("express");
const axios = require("axios");

const router = express.Router();

const wait = ms => new Promise(r => setTimeout(r, ms));

router.get("/", async (req, res) => {
  console.log("in test route, waiting 4 seconds");
  return wait(10).then(async () => {
    const randomPerson = await axios({
      method: "get",
      headers: { "content-type": "application/json" },
      url: `https://randomuser.me/api/`
    }).then(r => r.data);

    console.log("hejhej", randomPerson.results[0]);
    return res.status(200).json(randomPerson.results[0]);
  });
});

module.exports = router;
