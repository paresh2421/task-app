import { StatusCodes } from "http-status-codes";
import TaskSchema from "../models/Task.js";

const createTask = async (req, res) => {
  req.body.userId = req.user.userID;
  const task = await TaskSchema.create(req.body);

  res.status(StatusCodes.CREATED).json({ task });
};
const getAllTasks = async (req, res) => {
  const user = req.user.userID;
  const tasks = await TaskSchema.find({ userId: user }).sort("createdAt");
  res.status(StatusCodes.OK).json({ tasks, count: tasks.length });
};
const updateTask = async (req, res) => {
  res.send("updateTask");
};
const getTask = async (req, res) => {
  res.send("getTask");
};
const deleteTask = async (req, res) => {
  res.send("deleteTask");
};

export { createTask, getAllTasks, updateTask, getTask, deleteTask };
