import express from "express";
import http from "http";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

server.listen(port, () => {
  console.log("server started at", port);
});
