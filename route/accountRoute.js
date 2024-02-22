const express = require("express");
const router = express.Router();
const Account = require("../models/account");

router.post("/account", async (req, res) => {
  const { balance, userid, phonenumber } = req.body;

  const temp = new Account({
    balance: balance,
    userid: userid,
    phonenumber: phonenumber
  });

  try {
    temp.save();
    res.send("Create account successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.get("/getaccount", async (req, res) => {
  try {
    const account = await Account.find();
    res.send(account);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.post("/updateaccount", async (req, res) => {
  const { balance, phonenumber } = req.body;
  const filter = { phonenumber: phonenumber };
  const update = {
    balance: balance
  };

  try {
    const updatedDocument = await Account.findOneAndUpdate(filter, update, {
      new: true
    });
    res.send(updatedDocument);
  } catch (error) {
    return res.status(200).send(updatedDocument);
  }
});

module.exports = router;
