import Category from "../models/Category.js";
const getAll = async () => {
  try {
    const result = await Category.find();
    return result;
  } catch (error) {
    return error.toString();
  }
};

const createCategory = async (name) => {
  try {
    const result = await Category.create({ name });
    return result;
  } catch (error) {
    return error.toString();
  }
};
export default {
  getAll,
  createCategory,
};
