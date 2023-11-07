import { cartRepository } from "../repositories/index.js";

const getAllCart = async (req, res) => {
  try {
    const result = await cartRepository.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};

const createCart = async (req, res) => {
  const { totalProduct, totalQuantity, totalPrice, user } = req.body;
  try {
    const result = await cartRepository.createCart({
      totalProduct,
      totalQuantity,
      totalPrice,
      user,
    });
    res.status(200).json(result);
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};

const getDetailCart = async (req, res) => {
  const { user } = req.body;
  try {
    const result = await cartRepository.getDetailCart(user);
    res.status(200).json(result);
  } catch (error) {
    console.log("🚀 ========= error:", error);
  }
};
const addProduct = async (req, res) => {
  const { productId, cartId, quantity } = req.body;
  try {
    const quantityTotal = parseInt(quantity || 1);
    const result = await cartRepository.addProduct({
      productId,
      cartId,
      quantity: quantityTotal,
    });
    return res.status(200).json({ message: result });
  } catch (error) {
    return res.status(500).json(error.toString());
  }
};

export default {
  getAllCart,
  createCart,
  getDetailCart,
  addProduct,
};
