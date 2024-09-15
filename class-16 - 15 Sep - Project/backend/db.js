const mongoose = require("mongoose");

const uri =
  "mongodb+srv://username:F0NKtIll8eVRXiGc@cluster0-m2-spring-24.nh1yk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-M2-Spring-24";

// uri vs url?

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("Error Connecting with MongoDB", err));
