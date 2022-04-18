const express = require("express");
const { getAllSummary, getRewarsRecords } = require("./summary");

const port = process.env.PORT;
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
