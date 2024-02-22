const mongoose = require("mongoose");
const accountSchema = mongoose.Schema({
  userid: { type: Number, require: true },
  phonenumber: { type: Number, require: true },
  balance: { type: Number, default: 0 },
  accountnumber: {
    type: Number,
    default: Math.floor(Math.random() * 10000000000),
    require: true
  }
});

const accountModel = mongoose.model("accounts", accountSchema);

module.exports = accountModel;
