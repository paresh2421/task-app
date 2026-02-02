import { StatusCodes } from "http-status-codes";
import CustomErrorAPI from './custom-api.js';

class BadRequestError extends CustomErrorAPI{
    constructor(message){
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

export default BadRequestError;