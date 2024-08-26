const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const data = { name: "Hello World!" };

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/save", (req, res) => {
  console.log(req.body, req.body.name);
  data.name = req.body.name;
  res.send("Data Saved!");
});

app.get("/users", (req, res) => {
  res.send("Users");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
