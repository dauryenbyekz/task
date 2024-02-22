const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");

router.post("/transaction", async (req, res) => {
  const { value, phonenumber, raccount, currency, amount, type } = req.body;

  const temp = new Transaction({
    value: value,
    phonenumber: phonenumber,
    raccount: raccount,
    currency: currency,
    amount: amount,
    type: type
  });

  try {
    temp.save();
    res.send("Create transaction successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.get("/gettransaction", async (req, res) => {
  const { phonenumber } = req.body;
  try {
    const transaction = await Transaction.find({ phonenumber: phonenumber });
    res.send(transaction);
  } catch (error) {
    return res.status(400).json({ message: "something went wrong" });
  }
});

module.exports = router;
