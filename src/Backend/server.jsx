const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login where email = ? AND password = ?";
  const values = [req.body.email, req.body.password];
  db.query(sql, values, (err, data) => {
    if (err) return res.json(" Login Error");
    if (data.length > 0) {
      return res.json({ status: "success", message: "login succesfully" });
    } else {
      return res.json({ status: "fail", message: "No record" });
    }
  });
});

app.post("/changePic", (req, res) => {
  const sql = "UPDATE users SET profile_picture = ? WHERE id = ?";
});

app.listen(8081, () => {
  console.log("Listening....");
});
