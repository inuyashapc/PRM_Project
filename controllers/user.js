import { userRepository } from "../repositories/index.js";

const createUser = async (req, res) => {
  const { username, password, role } = req.body;
  try {
    const result = await userRepository.createUser({
      username,
      password,
      role,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Create is not successful",
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await userRepository.getAllUser();
    res.status(200).json({
      message: "Get user success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Get is not successful",
    });
  }
};

const login = async (req, res) => {
  console.log(req.body);
  const  username  = req.body.username;
  console.log(username);
  const password = req.body.password;
  console.log(password);
  try {
    const result = await userRepository.login( username, password );
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

const getUserDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userRepository.getUserDetail(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Get is not successful",
    });
  }
};

const checknameexist = async (req, res) => {
  const  username = req.params.username;
  try {
    const result = await userRepository.checkusername(username);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

export default {
  createUser,
  getAllUser,
  login,
  getUserDetail,
  checknameexist,
};
