import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
const getAll = async () => {
  try {
    const result = await Cart.find();
    return result;
  } catch (error) {
    return error.toString();
  }
};

const createCart = async ({
  totalProduct,
  totalQuantity,
  totalPrice,
  user,
}) => {
  try {
    const result = await Cart.create({
      totalProduct: totalProduct ? totalProduct : 0,
      totalQuantity: totalQuantity ? totalQuantity : 0,
      totalPrice: totalPrice ? totalPrice : 0,
      user,
    });
    return result;
  } catch (error) {
    return error.toString();
  }
};

const getDetailCart = async (user) => {
  try {
    const result = await Cart.findOne({ user });
    return result;
  } catch (error) {
    return error.toString();
  }
};

const addProduct = async ({ cartId, productId, quantity }) => {
  try {
    const cart = await Cart.findById(cartId);
    const product = await Product.findById(productId);
    if (!product) {
      return "Product is not existed";
    }
    if (!cart) {
      return "Cart is not existed";
    }
    let existedProduct = cart.product.find(
      (cProduct) => cProduct._id.toString() === productId
    );

    let totalQuantity = quantity;
    let totalProduct = product.price * totalQuantity;
    let totalPrice = product.price * totalQuantity;
    if (existedProduct) {
      existedProduct.quantity += totalQuantity;
      existedProduct.total += totalPrice;
    } else {
      cart.product.push({
        id: product._id,
        name: product.name,
        price: product.price,
        quantity,
        total: totalPrice,
      });
    }
    cart.totalProduct += totalProduct;
    cart.totalQuantity += totalQuantity;
    cart.totalPrice += totalPrice;
    await cart.save();
    await product.save();
    return "Successfully!";
  } catch (error) {
    throw new Error(error.toString());
  }
};
export default {
  getAll,
  createCart,
  getDetailCart,
  addProduct,
};
