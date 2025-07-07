import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const endpoint = "https://script.google.com/macros/s/AKfycbxllwGV-Iah_jaXX9fD_b4qg0fn4X2mg5PPXAS8XlnUvEIL99itPa2kvwQ6fdLCZPT2/exec";
    try {
      const response = await axios.post(endpoint, req.body);
      res.status(200).send("Success");
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send("Failed to submit form");
    }
  } else {
    res.status(405).send("Method not allowed");
  }
}
