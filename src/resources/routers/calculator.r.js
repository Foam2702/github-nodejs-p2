const app = require("express");
const router = app.Router();
const calculatorC = require("../controllers/calculator.c");
router.post("/", calculatorC.getValue);

module.exports = router;
