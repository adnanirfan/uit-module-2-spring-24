const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const data = [{ name: "Huzaifa" }];

/**
 * CRUD Operations
 * C - Create
 * R - Read
 * U - Update
 * D - Delete
 */

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/create", (req, res) => {
  const body = req.body;

  data.push(body);

  res.send(data);
});

app.put("/update/:index", (req, res) => {
  const { index } = req.params;
  const body = req.body;
  console.log("index: ", index);
  console.log("BODY: ", body);

  console.log(index, data);

  data[parseInt(index)].name = body.name;
  // data[index] = body

  res.send("Data Updated!");
});

app.delete("/delete/:index", (req, res) => {
  const { index } = req.params;

  data.splice(index, 1)


  res.send(data);
});

app.get("/users", (req, res) => {
  res.send("Users");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
