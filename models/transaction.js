const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
  {
    raccount: { type: String, require },
    value: { type: String, require },
    phonenumber: { type: Number, require },
    amount: { type: String, require },
    curency: { type: String },
    type: { type: String }
  },
  {
    timestamps: true
  }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;
