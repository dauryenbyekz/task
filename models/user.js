const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstname: { type: String, require },
    lastname: { type: String, require },
    password: { type: String, require },
    phonenumber: { type: Number, require },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
