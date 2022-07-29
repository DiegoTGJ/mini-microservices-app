const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4005;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios
    .post("http://posts:4000/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://comments:4001/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://query:4002/events", event)
    .catch((err) => console.log(err));
  axios
    .post("http://moderation:4003/events", event)
    .catch((err) => console.log(err));

  res.send({ status: "Ok" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
