import path from "path";
const getAllProducts = () => {
  return path.join(process.cwd(), "views", "product.html");
};

const addProduct = (productData) => {
  console.log("New product received:", productData);
  return { message: "Product added successfully", product: productData };
};

const getProductById = (productId) => {
  return `Fetching product with ID: ${productId}`;
};

export { getAllProducts, addProduct, getProductById };
