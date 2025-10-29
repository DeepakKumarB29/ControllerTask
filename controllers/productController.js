import * as productService from "../services/productService.js";

const getAllProducts = (req, res) => {
  res.sendFile(productService.getAllProducts());
};

const addProduct = (req, res) => {
  const productData = req.body;
  const result = productService.addProduct(productData);
  res.send(result);
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  res.send(productService.getProductById(productId));
};

export { getAllProducts, addProduct, getProductById };
