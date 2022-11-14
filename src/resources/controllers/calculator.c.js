const calculatorM = require("../models/calculator.m");

exports.getValue = (req, res, next) => {
  try {
    const rs = calculatorM.getValue(req, res);
    res.render("calculator", {
      result: rs,
    });
  } catch (err) {
    next(err);
  }
};
