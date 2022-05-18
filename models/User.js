import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    minlenth: 3,
    maxlength: 20,
    required: true,
    unique: true,
  },
  password: { type: String, minlenth: 3, maxlength: 100, required: true },
  name: { type: String, minlenth: 3, maxlength: 20, required: true },
  isVerified: { type: Boolean },
});

export default new mongoose.model("users", userSchema);
