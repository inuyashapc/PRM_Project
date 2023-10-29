import mongoose, { Mongoose, ObjectId, Schema } from "mongoose";
const Category = mongoose.model(
  "Category",
  new Schema({
    id: ObjectId,
    name: {
      type: String,
      require: true,
    },
  })
);
export default Category;
