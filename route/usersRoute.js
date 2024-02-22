const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  const { firstname, lastname, phonenumber, password } = req.body;

  const newUser = new User({
    firstname: firstname,
    lastname: lastname,
    password: password,
    phonenumber: phonenumber,
  });

  try {
    newUser.save();

    res.send("User Registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.post("/login", async (req, res) => {
  const { phonenumber, password } = req.body;

  try {
    const user = await User.find({ phonenumber, password });

    if (user.length > 0) {
      const currentUser = {
        firstname: user[0].firstname,
        phonenumber: user[0].phonenumber,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went weong" });
  }
});

module.exports = router;
