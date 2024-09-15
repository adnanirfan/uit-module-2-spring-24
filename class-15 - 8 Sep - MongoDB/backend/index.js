const express = require("express");
const cors = require("cors");
const app = express();

const port = 4000;
const MONGO_URL =
  "mongodb+srv://username:F0NKtIll8eVRXiGc@cluster0-m2-spring-24.nh1yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-M2-Spring-24";

const mongoose = require("mongoose");

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const kittens = await Kitten.find();
  res.send(kittens);
});

app.post("/create", async (req, res) => {
  const kittens = new Kitten({
    name: "123456789875432",
  });
  await kittens.save();
  res.send(kittens);
});

app.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const kitten = await Kitten.findByIdAndUpdate(id, { name }, { new: true });
  res.send(kitten);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
