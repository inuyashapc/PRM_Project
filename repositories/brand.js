import Brand from "../models/Brand.js";
const getAll = async () => {
  try {
    const result = await Brand.find();
    return result;
  } catch (error) {
    return error.toString();
  }
};

const createBrand = async (name) => {
  try {
    const result = await Brand.create({ name });
    return result;
  } catch (error) {
    return error.toString();
  }
};
export default {
  getAll,
  createBrand,
};
