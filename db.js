const mongoose = require("mongoose");

const mongodbURI =
  "mongodb+srv://Dudai:dudai@cluster0.ydfhni7.mongodb.net/demoapp";
mongoose.connect(mongodbURI, {
  useUniFiedTopology: true,
  useNewUrlParser: true,
});
var connection = mongoose.connection;
connection.on("error", () => {
  console.log("MongoDB connection failed");
});
connection.on("connected", () => {
  console.log("MongoDB connection successful");
});
module.exports = mongoose;
