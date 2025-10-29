import * as productService from "../services/productService.js";

const getAllProducts = (req, res, next) => {
  try {
    const filepath = productService.getAllProducts();
    res.sendFile(filepath);
  } catch (err) {
    next(err);
  }
};

const addProduct = (req, res, next) => {
  try {
    const productData = req.body;
    if (!productData.name) {
      const error = new Error("Product name is required");
      error.statusCode = 400;
      throw error;
    }

    const result = productService.addProduct(productData);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

const getProductById = (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = productService.getProductById(productId);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

export { getAllProducts, addProduct, getProductById };
