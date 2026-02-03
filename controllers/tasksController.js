import { StatusCodes } from "http-status-codes";
import TaskSchema from "../models/Task.js";

const createTask = async (req, res) => {
  res.send("createTask");
};
const getAllTasks = async (req, res) => {
  res.send("getAllTasks");
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
