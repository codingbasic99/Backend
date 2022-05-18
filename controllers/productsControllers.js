import Product from "../models/Product.js";
import cloudinaryUploader from "../config/cloudinaryConfig.js";

async function createProduct(req, res) {
  console.log(req.body);

  try {
    let filesUrls = [];
    if (req.files) {
      for (const file of req.files) {
        let result = await cloudinaryUploader.uploader.upload(file.path);
        filesUrls.push(result.secure_url);
      }
    }
    let result = await Product.create({ ...req.body, images: filesUrls });
    res.status(201).send(result);

    // let uploadResult = await cloudinaryUploader.uploader.upload(
    //   req.files[0].path
    // );
    // console.log(uploadResult);

    //   let result = await Product.create(req.body);
    //   res.status(201).send("Product Created");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getProducts(req, res) {
  let { limit, page, sortBy, sortOrder } = req.query;
  try {
    let count = await Product.find().count();
    let result = await Product.find()
      .populate("category")
      .sort({ [sortBy]: sortOrder || 1 })
      .limit(limit || 10)
      .skip(parseInt(page) * limit);
    res.status(200).send({
      totalRecords: count,
      result,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function getProduct(req, res) {
  try {
    let result = await Product.findById(req.params.id);
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
async function deleteProduct(req, res) {
  try {
    let result = await Product.deleteOne({ _id: req.params.id });
    res.status(200).send("Product deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createProduct, getProducts, getProduct, deleteProduct };
