//imports
const express = require("express");
const app = express();

//app wide middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set("view engine", "ejs");

//routers
const accountsRouter = require("./routes/accounts");
const adminRouter = require("./routes/admin");

//index page
app.get("/", (req, res) => {
  res.render("index", { info: "Daily Message" });
});

//enabling routers
app.use("/account", accountsRouter);
app.use("/admin", adminRouter);

//middleware

//start the app
app.listen(3000);
