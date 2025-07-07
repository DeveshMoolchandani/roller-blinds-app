console.log("Starting server...");
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

app.post("/submit", async (req, res) => {
  const endpoint = "https://script.google.com/macros/s/AKfycbxllwGV-Iah_jaXX9fD_b4qg0fn4X2mg5PPXAS8XlnUvEIL99itPa2kvwQ6fdLCZPT2/exec";
  try {
    const response = await axios.post(endpoint, req.body);
    res.status(200).send("Success");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Failed to submit form");
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
