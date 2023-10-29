import mongoose, { Mongoose, ObjectId, Schema } from "mongoose";
const Brand = mongoose.model(
  "Brand",
  new Schema({
    id: ObjectId,
    name: {
      type: String,
      require: true,
    },
  })
);
export default Brand;
