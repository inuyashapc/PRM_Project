import Product from "../models/Product.js";

const getAll = async () => {
  try {
    const result = await Product.find().populate("brand").populate("category");
    return result;
  } catch (error) {
    return error.toString();
  }
};

const createProduct = async ({
  name,
  description,
  price,
  category,
  brand,
  thumbnail,
}) => {
  try {
    const result = await Product.create({
      name,
      description,
      price,
      category,
      brand,
      thumbnail,
    });
    return result;
  } catch (error) {
    return error.toString();
  }
};

const getProductByBrand = async (brand) => {
  try {
    const result = await Product.find({ category: category })
      .populate("category")
      .populate("brand");
    return result;
  } catch (error) {
    return error.toString();
  }
};

const getDetail = async (id) => {
  console.log("🚀 ========= 1234:", id);
  try {
    const result = await Product.findOne({ _id: id })
      .populate("category")
      .populate("brand");
    return result;
  } catch (error) {
    return error.toString();
  }
};

const getCommentByProduct = async (id) => {
  try {
    const result = await Product.findOne({ _id: id }).populate("comment");
    return result.comment;
  } catch (error) {
    return error.toString();
  }
};
const getFiveCheapestProducts = async () => {
  try {
    const result = await Product.find()
      .populate("brand")
      .populate("category")
      .sort({ price: 1 }) // Sắp xếp theo giá tăng dần (1) hoặc giảm dần (-1)
      .limit(5); // Giới hạn lấy 5 sản phẩm
    return result;
  } catch (error) {
    return error.toString();
  }
};

export default {
  getAll,
  createProduct,
  getProductByBrand,
  getDetail,
  getCommentByProduct,
  getFiveCheapestProducts,
};
