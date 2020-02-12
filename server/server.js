const http = require("http");
const express = require("express");

const dotenv = require("dotenv");
const testRouter = require("./routes/test");

dotenv.config();
const app = express();

app.use(express.json());

app.use("/test", testRouter);

const server = http.createServer(app);

const port = process.env.PORT || 4000;

server.listen(port, process.env.LOCAL_IP);

console.debug(`API-server server listening on ${process.env.LOCAL_IP}:${port}`);