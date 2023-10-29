import { brandRepository, productReposiroty } from "../repositories/index.js";

const getAll = async (req, res) => {
  try {
    const result = await brandRepository.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const createBrand = async (req, res) => {
  const { name } = req.body;
  try {
    const result = await brandRepository.createBrand(name);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
export default {
  getAll,
  createBrand,
};
