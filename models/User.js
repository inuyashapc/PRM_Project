import mongoose, { ObjectId, Schema } from "mongoose";

const User = mongoose.model(
  "User",
  new Schema({
    id: ObjectId,
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: false,
      default: "User",
    },
    birthday: {
      type: Date,
      require: false,
    },
    phoneNumber: {
      type: String,
      require: false,
    },
    address: {
      type: String,
      require: false,
    },
  })
);
export default User;
