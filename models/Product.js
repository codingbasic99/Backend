import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  name: String,
  isLive: Boolean,
  image: String,
});

const productSchema = new mongoose.Schema({
  name: { type: String, minlength: 3, maxlength: 50, required: true },
  price: { type: Number, min: 0.01, max: 100000, required: true },
  description: { type: String, minlength: 3, maxlength: 500, required: true },
  images: { type: Array },
  inStock: { type: Boolean },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  department: { type: String, minlength: 2, maxlength: 30 },
});

export default new mongoose.model("products", productSchema);
