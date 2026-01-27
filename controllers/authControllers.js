import { StatusCodes } from "http-status-codes";
import UserSchema from "../models/User.js";

const register = async (req, res) => {
  const user = await UserSchema.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user: { username: user.name } });
};
const login = async (req, res) => {
  const { email, password } = req.body;
//   console.log(email, password);

  if (!email || !password) {
    throw new Error("email and password is required");
  }

  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new Error("invalid credentials, please try again");
  }

  const matchPass = await user.comparePass(password)
//   console.log(matchPass);

  if(!matchPass){
    throw new Error('invalid creds, please try again')
  }
  res.status(StatusCodes.OK).json({ user: user.name });
};
const updateUser = async (req, res) => {
  return res.send("update user");
};

export { register, login, updateUser };
