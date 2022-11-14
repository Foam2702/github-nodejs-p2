const fs = require("fs");
module.exports = {
  getValue: (req, res) => {
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
    return rs;
  },
};
