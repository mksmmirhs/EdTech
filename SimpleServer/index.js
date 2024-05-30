const express = require("express");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const app = express();
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 5000;

//parsers
app.use(express.json());
app.use(cors());

// main function
async function run() {
  try {
    // user login route
    app.post("/login", (req, res) => {
      const { users } = require("./users.json");
      let loggedInUser = null;
      // check if the logged in user on jason file
      users.forEach((user) => {
        if (
          user.username === req.body.username &&
          user.password === req.body.password
        ) {
          loggedInUser = user;
          // create jwt token
          const jwtToken = jwt.sign(loggedInUser, process.env.JWT_SECRET, {
            expiresIn: "3h",
          });
          res.status(200).send(jwtToken);
        }
      });
      //  send status for unauthorized access
      if (!loggedInUser) {
        res.status(401).send("Unauthorized");
      }
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
