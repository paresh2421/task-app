import required from "joi";
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: [true, 'Please provide the task'],
        maxLength: 60
    },
    completed:{
        type: Boolean,
        default: false
    },
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the user']
    }
}, {timestamps: true})

export default mongoose.model('Task', TaskSchema)