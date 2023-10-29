import User from "../models/User.js";

const createUser = async ({ username, password }) => {
  try {
    const result = await User.create({ username, password });
    return result;
  } catch (error) {
    return error.toString();
  }
};
const getAllUser = async () => {
  try {
    const result = await User.find();
    return result;
  } catch (error) {
    return error.toString();
  }
};

const login = async ({ username, password }) => {
  try {
    const result = await User.findOne({ username, password });
    if (!result) {
      throw new Error("Tai khoan mat khau khum dung");
    }
    return result;
  } catch (error) {
    throw new Error(error.toString());
  }
};

const getUserDetail = async (id) => {
  try {
    const result = await User.findOne({ _id: id });
    return result;
  } catch (error) {
    return error.toString();
  }
};
export default {
  createUser,
  getAllUser,
  login,
  getUserDetail,
};
