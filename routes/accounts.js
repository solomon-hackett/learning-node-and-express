const express = require("express");
const router = express.Router();

//user registration
router
  .route("/register")
  .get((req, res) => {
    res.render("account/register");
  })
  .post((req, res) => {
    const isValid = false;
    if (isValid) {
      users.push({ name: req.body.name });
      res.redirect(`/account/${users.length - 1}`);
    } else {
      console.log("Error");
      res.render("account/register", {name: req.body.name});
    }
  });

//user login
router.get("/login", (req, res) => {
  res.send("login here");
});

//main account page
router.get("/", (req, res) => {
  res.render("account/account");
});
router
  .route("/:id")
  .get((req, res) => {
    res.send(req.user);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [{ name: "Kyle Smith" }, { name: "Sally Stevens" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
