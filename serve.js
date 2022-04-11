const express = require("express");
const { getAllSummary } = require("./Summary");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(getAllSummary());
});

app.listen(port, () => {
  console.log("Server listening on the port   ", port);
});
