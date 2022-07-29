const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4005;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://localhost:4000/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://localhost:4001/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://localhost:4002/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://localhost:4003/events", event)
    .catch((err) => console.log(err));

  res.send({ status: "Ok" });
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
