import express from 'express'
const router = express.Router()

import { createTask, updateTask, getAllTasks, getTask, deleteTask } from '../controllers/tasksController.js'

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;
