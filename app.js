//importing--requring
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");

const cookieParser = require("cookie-parser");

//middlewares
const corsOptions = {credentials: true}

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


//importing or requring routes
const authRoutes = require('./routes/auth')

//Routes
app.use("/api/auth", authRoutes);


//mongoose connection
mongoose
  .connect("mongodb+srv://sahilminecraft502:Kanepokhari7s@newsboy.qulth.mongodb.net/?retryWrites=true&w=majority&appName=NewsBoy")
  .then(() => {
    //start server
    app.listen(4000, () => {
      console.log("DB $ Server connected Sucessfully");
    });
  })
  .catch((err) => {
    console.log(err);
  });