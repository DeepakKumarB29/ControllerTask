const getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

const addProduct = (req, res) => {
  res.send("Adding a new product");
};

const getProductById = (req, res) => {
  const productId = req.params.id;
  res.send(`Fetching product with ID: ${productId}`);
};

export { getAllProducts, addProduct, getProductById };
