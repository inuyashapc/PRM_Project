import { productReposiroty } from "../repositories/index.js";

const getAll = async (req, res) => {
  try {
    const result = await productReposiroty.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
const createProduct = async (req, res) => {
  const { name, description, price, typeKeyboard, brand, thumbnail } = req.body;
  try {
    const result = await productReposiroty.createProduct({
      name,
      description,
      price,
      typeKeyboard,
      brand,
      thumbnail,
    });
    res.status(201).json({
      message: "Create product success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create product not success",
    });
  }
};

const getProductByBrand = async (req, res) => {
  const { brand } = req.params;
  console.log('data', brand);
  try {
    const result = await productReposiroty.getProductByBrand(brand);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });gio
  }
};

const getDetail = async (req, res) => {
  const { id } = req.params;
  console.log("🚀 ========= id:", id);
  try {
    const result = await productReposiroty.getDetail(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
const getCommentByProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productReposiroty.getCommentByProduct(id);
    res.status(200).json({
      message: "Get comment by product success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
const getFiveCheapestProducts = async (req, res) => {
  try {
    const result = await productReposiroty.getFiveCheapestProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const getCheapestProducts = async (req, res) => {
  try {
    const result = await productReposiroty.getCheapestProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const getAllSearch = async (req, res) => {
  const { search } = req.body;
  try {
    const result = await productReposiroty.getAllSearch(search);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
export default {
  getAll,
  createProduct,
  getProductByBrand,
  getDetail,
  getCommentByProduct,
  getFiveCheapestProducts,
  getCheapestProducts,
  getAllSearch,
};
