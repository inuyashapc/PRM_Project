import User from "../models/User.js";

const createUser = async ({
  username,
  password,
  role,
  fullname,
  phoneNumber,
  address,
}) => {
  try {
    const result = await User.create({
      username,
      password,
      role,
      fullname: fullname ? fullname : "",
      phoneNumber: phoneNumber ? phoneNumber : "",
      address: address ? address : "",
    });
    return result ? true : false;
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

const login = async (username1, password1) => {
  try {
    const result = await User.findOne({
      username: username1,
      password: password1,
    });
    console.log(result);
    if (result) {
      return { _id: result._id, role: result.role };
    }
    return { _id: "" };
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

const checkusername = async (name) => {
  try {
    const result = await User.findOne({ username: name });
    if (result) return true;
    return false;
  } catch (error) {
    return error.toString();
  }
};
export default {
  createUser,
  getAllUser,
  login,
  getUserDetail,
  checkusername,
};
