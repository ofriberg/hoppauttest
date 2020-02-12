const express = require("express");
const router = express.Router();
const bankid = require("../bankid");

router.get("/", async (request, response) => {
  const { personalNumber } = request.query;
  return await bankid
    .flow(
      bankid.auth,
      [personalNumber.toString(), "127.0.0.1"],
      bankRes => (launchUrls = bankRes)
    )
    .then(r => {
      return response.status(200).json(r);
    })
    .catch(e => {
      console.log("e", e);
      return response.status(400).json(e);
    });
});

module.exports = router;
