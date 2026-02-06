//top level imports
import express from "express";
import dotenv from "dotenv";

//configs
const app = express();
dotenv.config();

//imports
import authRouter from "./routes/authRouter.js";
import taskRouter from "./routes/tasksRouter.js";
import connectDB from "./db/connect.js";
import authenticate from './middleware/authentication.js'

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

//configurations
app.use(express.json());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/tasks", authenticate, taskRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
//variables
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`),
    );
  } catch (error) {
    console.log(error);
  }
};

start();
