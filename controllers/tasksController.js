import { StatusCodes } from "http-status-codes";
import TaskSchema from "../models/Task.js";
import {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
} from "../errors/index.js";

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
  const {
    user: { userID },
    params: { id: taskId },
    body: { task: taskName, completed: status },
  } = req;

  if (taskName === "" || (taskName && taskName.trim().length === 0)) {
    throw new BadRequestError("Task name cannot be empty");
  }
  const task = await TaskSchema.findByIdAndUpdate(
    { _id: taskId, userId: userID },
    // { task: taskName, completed: status },
    req.body,
    { new: true, runValidators: true },
  );
  res.status(StatusCodes.OK).json({ task });
};
const getTask = async (req, res) => {
  const {
    params: { id: taskId },
    user: { userID },
  } = req;

  const task = await TaskSchema.findOne({ _id: taskId, userId: userID });

  if (!task) {
    throw new NotFoundError(`No task with id ${taskId}`);
  }

  res.status(StatusCodes.OK).json({ task });
};
const deleteTask = async (req, res) => {
  const {
    user: { userID },
    params: { id: taskId },
  } = req;

  const task = await TaskSchema.findByIdAndDelete({
    _id: taskId,
    userId: userID,
  });

  if (!task) {
    throw new NotFoundError(`No job with id ${taskId}`);
  }
  res.status(StatusCodes.OK).send("success");
};

export { createTask, getAllTasks, updateTask, getTask, deleteTask };
