import express from "express";
import dotenv from 'dotenv'

const app = express();
dotenv.config()

import authRouter from "./routes/authRouter.js";
import connectDB from "./db/connect.js";

app.use(express.json())

app.use("/api/v1/auth", authRouter);
// app.get("/", (req, res) => {
//   res.send("test");
// });

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    // console.log(respond);
    
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start()