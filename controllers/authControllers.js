import { StatusCodes } from "http-status-codes";
import UserSchema from "../models/User.js";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const user = await UserSchema.create({ ...req.body });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({ user: { username: user.name }, token });
};


const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("email and password is required");
  }

  const user = await UserSchema.findOne({ email });

  if (!user) {
    throw new UnauthenticatedError("invalid credentials, please try again");
  }

  const matchPass = await user.comparePass(password);
  if (!matchPass) {
    throw new UnauthenticatedError("invalid creds, please try again");
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: user.name, token });
};


const updateUser = async (req, res) => {
  return res.send("update user");
};

export { register, login, updateUser };
