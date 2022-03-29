const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoute = require("./routes/auth")
const bookedFlightRoute = require("./routes/BookedFlight")

const connect = () => {
  return mongoose.connect(process.env.MONGOOSE_DB_URL);
};

const app = express();

app.use(express.json());
app.use("/auth", authRoute);
app.use("/bookings", bookedFlightRoute);

app.listen(1234, async (req, res) => {
  await connect();
  console.log("Listening on port 1234");
});
