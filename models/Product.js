import mongoose, { Mongoose, ObjectId, Schema } from "mongoose";
const Product = mongoose.model(
  "Product",
  new Schema({
    id: ObjectId,
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: false,
    },
    price: {
      type: Number,
      require: false,
    },
    typeKeyboard: {
      type: String,
      require: false,
    },
    brand: {
      type: String,
      ref: "Brand",
    },
    thumbnail: {
      type: String,
    },
  })
);
export default Product;
