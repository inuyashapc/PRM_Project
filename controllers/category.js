import { categoryRepository } from "../repositories/index.js";

const getAll = async (req, res) => {
  try {
    const result = await categoryRepository.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await categoryRepository.createCategory(name);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
export default {
  getAll,
  createCategory,
};
