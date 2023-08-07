const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
//dot config
dotenv.config();
//database
connectDB();
//rest object
const app = express();
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", require("./routes/authRoutes"));

//port
const PORT = process.env.PORT || 3000;
//listen
app.listen(PORT, () => {
  console.log(
    `Server Running IN Mode ${process.env.ENV_MODE} on http://localhost: ${PORT} 🚀🩸`
      .bgBlue.white
  );
});
