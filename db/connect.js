import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url, {
    dbName: "task-app",
  });
};

export default connectDB;
