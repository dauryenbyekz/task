const express = require("express");

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const cors = require("cors");

app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
const dbConfig = require("./db");
const usersRoute = require("./route/usersRoute");
const accountRoute = require("./route/accountRoute");
const transactionRoute = require("./route/transactionRoute");

app.use("/api/users", usersRoute);
app.use("/api/users", accountRoute);
app.use("/api/users", transactionRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Nodemon server started on port ${PORT}`));
