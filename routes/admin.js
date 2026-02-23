const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin page");
});

router.get("/registerUser", (req, res) => {
  res.send("register a user an account here");
});

router.get("/deleteUser", (req, res) => {
  res.send("delete a user here");
});

module.exports = router;
