const express = require("express"),
  fs = require("fs"),
  exphbs = require("express-handlebars"),
  app = express(),
  port = 3000;
app.use(express.static(__dirname + "/public"));

app.engine("hbs", exphbs.engine());
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.send("Hello Word");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
