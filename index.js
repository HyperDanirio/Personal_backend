const express = require('express');
const mysql = require('mysql2');
const app = express();
const port1 = 6000;

app.use(express.json());

const connection = mysql.createConnection({
  host: "danielpersonaldb.czo2s8cyqdw9.ap-northeast-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "?Danirio1115",
  database: "Daniel_Portfolio",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database");
  }
});

app.get("/skills", function (req, res) {
    connection.query("SELECT * FROM Skills",
      (err, results) => {
        if (!err) {
          console.log("Get is successful for the skill info");
          res.send(results);
        } else {
          console.log(err);
          res.status(500).send("Internal Server Error");
        }
      });
  });
  

app.listen(port1, () => {
    console.log(`Server Started at ${port1}`);
  });
  