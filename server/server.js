const http = require("http");
const express = require("express");

const dotenv = require("dotenv");
const bankDotNetRouter = require("./routes/bankDotNet");

dotenv.config();

const app = express();
app.use(express.json());
app.use("/bankdotnet", bankDotNetRouter);

const server = http.createServer(app);

const port = process.env.PORT || 4000;

server.listen(port, process.env.LOCAL_IP);

console.debug(`API-server server listening on ${process.env.LOCAL_IP}:${port}`);
