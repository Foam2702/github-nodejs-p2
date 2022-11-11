const express = require("express"),
  fs = require("fs"),
  hbs = require("express-handlebars"),
  path = require("path");
bodyparser = require("body-parser");
(app = express()), (port = 3000);

app.use(bodyparser.urlencoded({ extended: true }));

app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    defaultLayout: "container.hbs",
  })
);
app.set("view engine", "hbs");
// app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "resources//views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.post("/calculationMVCpattern", function (req, res) {
  let rs = 0;
  const x = parseFloat(req.body.valueX);
  const y = parseFloat(req.body.valueY);
  switch (req.body.operator) {
    case "sum":
      rs = x + y;
      break;
    case "subtract":
      rs = x - y;
      break;
    case "multi":
      rs = x * y;
      break;
    case "divide":
      rs = x / y;
      break;
  }
  res.render("home", {
    result: rs,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
