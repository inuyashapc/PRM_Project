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
    category: {
      type: String,
      ref: "Category",
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
