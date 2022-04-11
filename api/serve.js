const express = require("express");
const { getAllSummary, getRewarsRecords } = require("./Summary");

const port = 3001;
const app = express();

app.get("/summary", (req, res) => {
  res.json(getAllSummary());
});
app.get("/purchases", (req, res) => {
  res.json(getRewarsRecords());
});

app.listen(port, () => {
  console.log("Server listening on the port   ", port);
});
