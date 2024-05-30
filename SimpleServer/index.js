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
          loggedInUser = { ...user };
          delete loggedInUser.password;
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

    //signup
    // Route handler for writing the JSON file
    app.post("/signup", (req, res) => {
      const { users } = require("./users.json");
      let duplicateUser = false;
      const newUser = req.body;
      newUser.id = users.length + 1;
      users.forEach((user) => {
        if (user.username === newUser.username) {
          duplicateUser = true;
          return res.status(409).send("duplicate username");
        }
      });
      if (!duplicateUser) {
        users.push(newUser);
        // Convert data to JSON string
        const jsonData = JSON.stringify({ users }); // Add indentation for readability (optional)

        // Write data to file
        fs.writeFile("users.json", jsonData, "utf8", (err) => {
          if (err) {
            console.error(err);
            return res.status(500).send("Error writing JSON file");
          }

          console.log("JSON file written successfully");
          // create jwt token
          const jwtToken = jwt.sign(newUser, process.env.JWT_SECRET, {
            expiresIn: "3h",
          });
          res.status(200).send(jwtToken);
        });
      }
    });

    // get all webinars
    app.get("/webinars", (req, res) => {
      const { webinars } = require("./webinars.json");
      res.json(webinars);
    });

    // get all courses
    app.get("/courses", (req, res) => {
      const { courses } = require("./courses.json");
      res.json(courses);
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
