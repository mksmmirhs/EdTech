const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;

//parsers
app.use(express.json());
app.use(cors());

// read file and return json

// const readLocalFile = () => {
//   const filePath = path.join(__dirname, "data.json");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ error: "Unable to read file" });
//     }

//     return JSON.parse(data);
//   });
// };

// main function
async function run() {
  try {
    app.get("/data", (req, res) => {
      const data = require("./data.json");
    });
  } finally {
  }
}

run().catch(console.dir);
//test route
app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(port, () => {
  console.log(`EdTech is running at port ${port}`);
});
