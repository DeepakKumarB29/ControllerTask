import path from "path";
const getAllProducts = () => {
  return path.join(import.meta.dirname, "..", "views", "product.html");
};

const addProduct = () => {
  return "Adding a new product";
};

const getProductById = (productId) => {
  return `Fetching product with ID: ${productId}`;
};

export { getAllProducts, addProduct, getProductById };
