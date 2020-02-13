const express = require("express");
const router = express.Router();
const axios = require("axios");

const auth = async ({ personalNumber }) => {
  const response = await axios({
    method: "get",
    headers: { "content-type": "application/json" },
    url: `http://localhost:5000/api/BankID/Auth?ip=127.0.0.1&personalNumber=${personalNumber}`
  }).then(r => r.data);

  return response;
};

const collect = async ({ orderRef }) => {
  const response = await axios({
    method: "get",
    headers: { "content-type": "application/json" },
    url: `http://localhost:5000/api/BankID/Collect?orderRef=${orderRef}`
  }).then(r => r.data);

  return response;
};

const poller = async ({ orderRef }) => {
  while (true) {
    const { status, hintCode, completionData } = await collect({ orderRef });
    console.log("status", status);
    if (status === "failed") {
      return { ok: false, status: hintCode };
    }
    if (status === "complete") {
      return { ok: true, status: completionData };
    }
    console.log(hintCode);

    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

router.get("/", async (request, response) => {
  const { personalNumber } = request.query;
  const result = await auth({ personalNumber });
  const { orderRef } = result;
  const pollingResult = await poller({ orderRef });

  if (pollingResult.ok) {
    const { status } = pollingResult;
    const { user } = status;
    response.status(200).json(user);
  } else {
    response.status(400).json({ error: "some error" });
  }
});

module.exports = router;
