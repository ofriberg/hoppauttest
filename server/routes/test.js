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

    const name = `${randomPerson.results[0].name.first} ${randomPerson.results[0].name.last}`;
    console.log(randomPerson.results);
    console.log("returning person", name);

    return res.status(200).json(randomPerson.results);
  });
});

module.exports = router;
